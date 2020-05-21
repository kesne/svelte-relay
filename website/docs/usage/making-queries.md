---
title: Making Queries
---

A GraphQL query is a request that can be sent to a GraphQL server in combination with a set of variables, in order to fetch some data. It consists of a selection of fields, and potentially includes other fragments.

To fetch and render a query in Svelte Relay, you can use the `getQuery()` function. This function accepts a GraphQL query. Let's set up our first query and a component to display the data:

```html title="User.svelte"
<script>
	import { getQuery, graphql } from 'svelte-relay';
	const query = getQuery(graphql`
		query UserQuery {
			currentUser {
				id
				firstName
				lastName
			}
		}
	`);
</script>
```

:::info
After creating this file, you will need to run the `relay-compiler` to process the newly-created GraphQL query and generate the appropriate files.
:::

To consume the data from the query, we can use the [Svelte await block](https://svelte.dev/tutorial/await-blocks). This allows us to wait for a Promise to resolve, and display different UIs based on the error or loading state.

```html title="User.svelte"
{#await $query}
	<div>Loading...</div>
{:then data}
	<h1>{data.currentUser.firstName} {data.currentUser.lastName}</h1>
{:catch error}
	<div>Error: {error.message}</div>
{/await}
```

The return value of `getQuery()` is a [Svelte Store](https://svelte.dev/tutorial/auto-subscriptions). By prefixing it with `$`, we automatically subscribe to the latest data from the GraphQL query.

## Passing Variables

## Using fragments

TODO: Link to fragments doc, add example of using fragments.
