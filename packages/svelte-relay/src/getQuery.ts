import { Readable, readable } from 'svelte/store';
import {
	OperationType,
	GraphQLTaggedNode,
	createOperationDescriptor,
	getRequest,
	Disposable,
	SelectorData,
} from 'relay-runtime';
import { getRelayEnvironment } from './context';

export interface QueryResult<TQuery extends OperationType>
	extends Promise<TQuery['response']>,
		Readable<Promise<TQuery['response']>> {}

export function getQuery<TQuery extends OperationType>(
	query: GraphQLTaggedNode,
	variables: TQuery['variables'] = {},
): QueryResult<TQuery> {
	// The subscription for when the data in the store is updated:
	let updateSubscription: Disposable;
	// Used to update the store when new data from the cache is provided:
	let updateStore: (data: Promise<SelectorData>) => void;

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

			// TODO: Only set up the subscription when you subscribe via the readable
			// store, and not via the promise itself.
			updateSubscription = environment.subscribe(snapshot, (newSnapshot) => {
				updateStore(Promise.resolve(newSnapshot.data));
			});

			return snapshot.data;
		});

	// Create the store that the UI can subscribe to get real-time updates:
	const dataStore = readable(promise, (set) => {
		updateStore = set;
		return () => {
			if (updateSubscription) {
				updateSubscription.dispose();
			}
		};
	});

	// Return our promise-like store-like interface:
	return {
		...promise,
		then: promise.then.bind(promise),
		catch: promise.catch.bind(promise),
		finally: promise.finally.bind(promise),
		subscribe: dataStore.subscribe.bind(dataStore),
	};
}
