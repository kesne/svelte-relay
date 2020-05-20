import { Readable, readable } from 'svelte/store';
import { OperationType, GraphQLTaggedNode, fetchQuery, getRequest, createOperationDescriptor } from 'relay-runtime';
import { getRelayEnvironment } from './context';

interface QueryPromiseStore<T> extends PromiseLike<T>, Readable<T> {}

export function getQuery<TQuery extends OperationType>(
	query: GraphQLTaggedNode,
	variables: TQuery['variables'] = {},
): QueryPromiseStore<TQuery['response']> {
	// Create the store that the UI can subscribe to get real-time updates:
	let updateStore: (data: any) => void;
	const dataStore = readable(null, (set) => {
		updateStore = set;
	});

	// Get the current Relay envrionment:
	const environment = getRelayEnvironment();

	// Fetch the data from the network:
	// TODO: We also want to subscribe to updates from the store.
	const promise = fetchQuery(environment, query, variables).then((data) => {
		updateStore(data);
		return data;
	});

	// Return our promise-like store-like interface:
	return {
		then: promise.then.bind(promise),
		subscribe(...args) {
			return dataStore.subscribe(...args);
		},
	};
}
