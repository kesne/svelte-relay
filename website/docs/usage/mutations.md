---
title: Mutations
---

In GraphQL, data in the server is updated using GraphQL Mutations. Mutations are read-write server operations, which both modify data in the backend, and allow querying for the modified data from the server in the same request.

To set up a mutation in Svelte Relay, you can use the `getMutation()` function. This function accepts a GraphQL query, and returns a function that can be used to perform the mutation.

```svelte
<!-- UserFirstName.svelte -->
<script>
	import { getMutation, graphql } from 'svelte-relay';

	const commit = getMutation(graphql`
		mutation UserFirstNameMutation($firstName: String!) {
			setFirstName(firstName: $firstName) {
				id
				firstName
			}
		}
	`);

	let firstName = '';

	function handleSubmit() {
		commit({
			variables: {
				firstName,
			}
		})
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	First Name: <input bind:value={firstName} />
	<button type="submit">Save</button>
</form>
```

> After creating this file, you will need to run the `relay-compiler` to process the newly-created GraphQL query and generate the appropriate files.

The options that the `commit()` function accepts is the same as the Relay `commitMutation()` method. Read [the Relay Documentation for more details](https://relay.dev/docs/en/mutations) on these options..

## Waiting for Mutations

Often, you will perform some action after a `commit()` succeeds or fails. For example, performing navigation to a new page, or displaying a toast to inform the user that the action completed successfully.

To support these experiences, the return value from calling `commit()` is promise. This promise can be awaited, and will be resolved with the data returned from the server.

```ts
async function handleSubmit() {
	await commit({ variables });
	navigate('/new/page');
}
```

If an error occurs in the mutation, the promise will be rejected with the error. You can use try/catch to handle these errors.

```ts
async function handleSubmit() {
	try {
		await commit({ variables });
		navigate('/new/page');
	} catch (e) {
		displayToast(`An error ocurred: ${e.message}`);
	}
}
```

## Reading Current Mutation State

The `commit` returned from `getMutation()` is a Svelte Store that contains state:

- **`isInFlight`** - If the mutation HTTP request is currently in-flight. Starts with `false`.
- **`data`** - The response data from the server if the mutation succeeds. Starts with `undefined`.
- **`error`** - The error data from the server if the mutation fails. Starts with `undefined`.

This state is useful for loading state, disabling buttons, and showing success states in the UI when a commit succeeds.

To read this state, you can use the [Svelte Store Auto-subscriptions](https://svelte.dev/tutorial/auto-subscriptions), and read the state by prefixing the variable with `$`.

```svelte
<script>
	import { getMutation, graphql } from 'svelte-relay';

	const commit = getMutation(graphql`
		mutation DoSomethingMutation {
			doSomething
		}
	`);
</script>

{#if $commit.data}
	<div>Commit completed!</div>
{:else if $commit.error}
	<div>Error: {$commit.error.message}</div>
{:else}
	<button disabled={$commit.isInFlight} on:click={() => commit()}>Commit</button>
{/if}
```
