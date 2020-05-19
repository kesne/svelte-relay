import { Readable, readable } from 'svelte/store';
import {
	OperationType,
	GraphQLTaggedNode,
	CacheConfig,
	getRequest,
	createOperationDescriptor,
} from 'relay-runtime';
import { getRelayEnvironment } from './context';
import defer from './defer';

export default function query<TQuery extends OperationType>(
	query: GraphQLTaggedNode,
	variables: TQuery['variables'] = {},
	options?: {
		// fetchKey?: string | number;
		// TODO: Implement:
		// fetchPolicy?: FetchPolicy;
		networkCacheConfig?: CacheConfig;
	},
): Readable<Promise<TQuery['response']>> {
	const environment = getRelayEnvironment();

	const request = getRequest(query);
	const operation = createOperationDescriptor(request, variables);

	const queryObservable = environment
		.execute({ operation, cacheConfig: options?.networkCacheConfig })
		.map(() => environment.lookup(operation.fragment).data);

	// NOTE: We initially set the value to "undefined", which is immedietly overwritten when the
	// store is actually subscribed to.
	return readable<Promise<TQuery['response']>>(undefined as any, (set) => {
		const { promise, resolve, reject } = defer();

		set(promise);

		let resolved = false;
		const subscription = queryObservable.subscribe({
			next(val) {
				if (!resolved) {
					resolved = true;
					resolve(val);
				}
			},
			error: reject,
			complete: resolve,
		});

		return () => {
			subscription.unsubscribe();
		};
	});
}
