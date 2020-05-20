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
	extends Readable<Promise<TQuery['response']>> {}

// TODO: Move more stuff in the readable store init:
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
	const request = getRequest(query);
	const operation = createOperationDescriptor(request, variables);
	const promise = environment
		.execute({ operation })
		.toPromise()
		.then(() => {
			const snapshot = environment.lookup(operation.fragment);

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

	// @ts-ignore: Adding to improve the UX if users mis-use the API:
	dataStore.then = () => {
		throw new Error(
			'It looks like you tried to use the result of `getQuery()` directly in an #await block. Ensure that the `getQuery()` result is prefixed with `$` so that you subscribe to the latest store value. Further reading: https://svelte.dev/tutorial/auto-subscriptions',
		);
	};

	return dataStore;
}
