import { Readable, readable } from 'svelte/store';
import {
	OperationType,
	GraphQLTaggedNode,
	fetchQuery,
	createOperationDescriptor,
	getRequest,
} from 'relay-runtime';
import { getRelayEnvironment } from './context';

export interface QueryResult<T> extends Promise<T>, Readable<Promise<T>> {}

export function getQuery<TQuery extends OperationType>(
	query: GraphQLTaggedNode,
	variables: TQuery['variables'] = {},
): QueryResult<TQuery['response']> {
	// Get the current Relay envrionment:
	const environment = getRelayEnvironment();

	// Fetch the data from the network:
	// TODO: We also want to subscribe to updates from the store.
	const request = getRequest(query);
	const operation = createOperationDescriptor(request, variables);
	const promise = environment
		.execute({ operation })
		.toPromise()
		.then(() => {
			const snapshot = environment.lookup(operation.fragment);

			environment.subscribe(snapshot, () => {
				console.log('DATA UPDATED');
			});

			return snapshot.data;
		});

	// Retain the operation:
	const retained = environment.retain(operation);

	// Create the store that the UI can subscribe to get real-time updates:
	let updateStore: (data: any) => void;
	const dataStore = readable(promise, (set) => {
		updateStore = set;
	});

	// Return our promise-like store-like interface:
	return {
		...promise,
		then: promise.then.bind(promise),
		catch: promise.catch.bind(promise),
		finally: promise.finally.bind(promise),
		subscribe(...args) {
			const unsubscribe = dataStore.subscribe(...args);

			return () => {
				console.log('dump');
				retained.dispose();
				unsubscribe();
			};
		},
	};
}
