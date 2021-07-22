import {
	GraphQLTaggedNode,
	OperationType,
	getRequest,
	createOperationDescriptor,
} from 'relay-runtime';
import { readable, Readable } from 'svelte/store';
import { createStore } from '../utils/createStore';
import { getRelayEnvironment } from '../utils/context';

interface Experimental_QueryResult<TQuery extends OperationType> {
	(variables?: TQuery['variables']): Promise<TQuery['response']>;
}

interface Experimental_QueryState<TQuery extends OperationType> {
	isInFlight: boolean;
	data?: TQuery['response'];
	error?: Error;
}

const DEFAULT_SET_STORE_STATE = (state: unknown) => {};

// TODO: Fetch / network policy to allow preserving the fetched state.
export function getQuery<TQuery extends OperationType>(
	queryGql: GraphQLTaggedNode,
): [Readable<Experimental_QueryResult<TQuery>>, Readable<Experimental_QueryState<TQuery>>] {
	const environment = getRelayEnvironment();
	const request = getRequest(queryGql);

	let setStoreState: (state: Experimental_QueryState<TQuery>) => void = DEFAULT_SET_STORE_STATE;

	let previousResult: any;

	const requestStore = createStore<Experimental_QueryResult<TQuery>>((set) => {
		const fetcher = (variables: TQuery['variables'] = {}) => {
			setStoreState({
				isInFlight: true,
			});
			const operation = createOperationDescriptor(request, variables);
			const promise = environment
				.execute({ operation })
				.toPromise()
				.then((data) => {
					previousResult = data;
					setStoreState({
						isInFlight: false,
					});
					return data;
				});

				if (previousResult) {
					return Promise.resolve(previousResult);
				}

				return promise;
		};

		set(fetcher);

		return () => {};
	});

	const stateStore = createStore<Experimental_QueryState<TQuery>>((set) => {
		setStoreState = set;

		set({
			isInFlight: false,
		});

		return () => {
			setStoreState = DEFAULT_SET_STORE_STATE;
		};
	});

	return [requestStore, stateStore];
}
