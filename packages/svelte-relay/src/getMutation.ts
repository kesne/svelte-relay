import { Readable, readable } from 'svelte/store';
import {
	commitMutation,
	GraphQLTaggedNode,
	MutationConfig,
	MutationParameters,
	Disposable,
} from 'relay-runtime';
import { getRelayEnvironment } from './context';

type GetMutationConfig<TOperation extends MutationParameters> = Omit<
	MutationConfig<TOperation>,
	'mutation' | 'variables'
> &
	Partial<Pick<MutationConfig<TOperation>, 'variables'>>;

export type MutationState<TOperation extends MutationParameters> = {
	isInFlight: boolean;
	data?: TOperation['response'];
	error?: Error;
};

export interface MutationResult<TOperation extends MutationParameters>
	extends Readable<MutationState<TOperation>> {
	// TODO: We should only mark this as optional of there are no variables in the query
	// otherwise, this is actually required!
	// This should be possible with tuples.
	(config?: GetMutationConfig<TOperation>): Promise<TOperation['response']>;
}

export function getMutation<TOperation extends MutationParameters>(
	mutationGql: GraphQLTaggedNode,
): MutationResult<TOperation> {
	const environment = getRelayEnvironment();
	const subscriptions: Set<Disposable> = new Set();

	let setState: (nextState: MutationState<TOperation>) => void = () => {};
	const stateStore = readable<MutationState<TOperation>>(
		{
			isInFlight: false,
			data: undefined,
			error: undefined,
		},
		(set) => {
			setState = set;
			return () => {
				subscriptions.forEach((sub) => {
					sub.dispose();
				});
				subscriptions.clear();
			};
		},
	);

	const mutation: MutationResult<TOperation> = (config) => {
		return new Promise((resolve, reject) => {
			setState({
				isInFlight: true,
				data: undefined,
				error: undefined,
			});

			subscriptions.add(
				commitMutation(environment, {
					...config,
					variables: config?.variables ?? {},
					mutation: mutationGql,
					onCompleted(data, errors) {
						setState({
							isInFlight: false,
							data,
							error: undefined,
						});
						resolve(data);
						if (config?.onCompleted) {
							config.onCompleted(data, errors);
						}
					},
					onError(error) {
						setState({
							isInFlight: false,
							data: undefined,
							error,
						});
						reject(error);
						if (config?.onError) {
							config.onError(error);
						}
					},
				}),
			);
		});
	};

	// Expose the store via subscription:
	mutation.subscribe = (...args) => stateStore.subscribe(...args);

	return mutation;
}
