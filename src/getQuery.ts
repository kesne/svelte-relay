import { Readable, readable } from 'svelte/store';
import { OperationType, GraphQLTaggedNode, fetchQuery } from 'relay-runtime';
import { getRelayEnvironment } from './context';

interface QueryPromiseStore<T> extends Promise<T>, Readable<Promise<T>> {}

export function getQuery<TQuery extends OperationType>(
	query: GraphQLTaggedNode,
	variables: TQuery['variables'] = {},
): QueryPromiseStore<TQuery['response']> {
	// Get the current Relay envrionment:
	const environment = getRelayEnvironment();

	// Fetch the data from the network:
	// TODO: We also want to subscribe to updates from the store.
	const promise = fetchQuery(environment, query, variables);

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
			return dataStore.subscribe(...args);
		},
	};
}
