---
title: Subscriptions
---

GraphQL Subscriptions are a mechanism which allows clients to subscribe to changes in a piece of data from the server, and get notified whenever that data changes.

In Svelte Relay, you can create a GraphQL subscription with the `getSubcription()` function.

```html title="User.svelte"
<script>
	import { getSubscription, getQuery, graphql } from 'svelte-relay';

	getSubscription({
		subscription: graphql`
			subscription UserUpdatedSubscription {
				viewer {
					id
					firstName
					lastName
				}
			}
		`;
	});

	const query = getQuery(graphql`
		query UserQuery {
			viewer {
				id
				firstName
				lastName
			}
		}
	`);
</script>

{#await $query then data}
	<div>Welcome, {data.firstName} {data.lastName}</div>
{/await}
```

For more information about the configuration object that can be passed to the `getSubscription()` function, [refer to the Relay documentation](https://relay.dev/docs/en/subscriptions#__docusaurus).
