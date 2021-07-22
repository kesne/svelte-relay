<script context="module">
	import { graphql } from '../../packages/svelte-relay/src';

	const appQuery = graphql`
		query AppQuery($input: String!) {
			echo(input: $input)
			viewer {
				id
				firstName
				lastName
				randomNumber
				...UserFragment_viewer
			}
			books {
				...BookFragment_book
			}
		}
	`;
</script>

<script type="typescript">
	import { getQuery, setRelayEnvironment } from '../../packages/svelte-relay/src';
	import { fetchQuery } from 'relay-runtime';
	import Book from './Book.svelte';
	import User from './User.svelte';
	import Mutate from './Mutate.svelte';
	import Experimental from './Experimental.svelte';
	import environment from './environment';
	import { AppQuery } from './__generated__/AppQuery.graphql';

	setRelayEnvironment(environment);

	let variables = {
		input: 'Echo Content',
	};

	$: query = getQuery<AppQuery>(appQuery, variables);

	function refetch() {
		// Imperatively refetch, to test store updates:
		fetchQuery(environment, appQuery, {});
	}
</script>

<h1>Svelte Relay</h1>

<Mutate />
<Experimental />

<button on:click={refetch}>Refetch</button>

{#await $query}
	<p>...waiting</p>
{:then data}
	<p>Got data! {data.viewer.randomNumber}</p>
	<div>Echo: {data.echo}</div>
	<User viewer={data.viewer} />
	<ul>
		{#each data.books as book}
			<Book {book} />
		{/each}
	</ul>
	<button on:click={() => (variables.input = `another echo ${Math.random()}`)}>Change Echo Content</button>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
