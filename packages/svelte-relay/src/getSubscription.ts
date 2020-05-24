import { getRelayEnvironment } from './context';
import { requestSubscription, GraphQLSubscriptionConfig, OperationType } from 'relay-runtime';
import { onDestroy } from 'svelte';

export function getSubscription<TSubscription extends OperationType>(
	config: GraphQLSubscriptionConfig<TSubscription>,
) {
	const environment = getRelayEnvironment();
	const subscription = requestSubscription(environment, config);

	onDestroy(() => {
		subscription.dispose();
	});
}
