import { Readable, readable } from 'svelte/store';
import {
	OperationType,
	GraphQLTaggedNode,
	createOperationDescriptor,
	getRequest,
	Disposable,
} from 'relay-runtime';
import { getRelayEnvironment } from './context';
import createStore from './createStore';

export interface QueryResult<TQuery extends OperationType>
	extends Readable<Promise<TQuery['response']>> {}

export function getQuery<TQuery extends OperationType>(
	queryGql: GraphQLTaggedNode,
	variables: TQuery['variables'] = {},
): QueryResult<TQuery> {
	// Get the current Relay envrionment:
	const environment = getRelayEnvironment();

	// Create the store that the UI can subscribe to get real-time updates:
	const dataStore = createStore<Promise<TQuery['response']>>((set) => {
		const subscriptions: Set<Disposable> = new Set();

		// Fetch the data from the network:
		const request = getRequest(queryGql);
		const operation = createOperationDescriptor(request, variables);
		const promise = environment
			.execute({ operation })
			.toPromise()
			.then(() => {
				const snapshot = environment.lookup(operation.fragment);

				subscriptions.add(
					environment.subscribe(snapshot, (newSnapshot) => {
						set(Promise.resolve(newSnapshot.data));
					}),
				);

				return snapshot.data;
			});

		set(promise);

		subscriptions.add(environment.retain(operation));
		return () => {
			subscriptions.forEach((sub) => {
				sub.dispose();
			});
			subscriptions.clear();
		};
	});

	// @ts-ignore: Adding to improve the UX if users mis-use the API:
	dataStore.then = () => {
		throw new Error(
			'It looks like you tried to use the result of `getQuery()` directly in an #await block. Ensure that the `getQuery()` result is prefixed with `$` so that you subscribe to the latest store value. Further reading: https://svelte.dev/tutorial/auto-subscriptions',
		);
	};

	return dataStore;
}
