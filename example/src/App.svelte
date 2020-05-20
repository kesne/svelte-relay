<script type="typescript">
	import {
		getQuery,
		setRelayEnvironment,
		graphql,
		QueryResult,
	} from '../../packages/svelte-relay/src';
	import { fetchQuery } from 'relay-runtime';
	import Book from './Book.svelte';
	import environment from './environment';
	import { AppQuery } from './__generated__/AppQuery.graphql';

	setRelayEnvironment(environment);

	const appQuery = graphql`
		query AppQuery {
			viewer {
				id
				firstName
				lastName
				randomNumber
			}
			books {
				...BookFragment_book
			}
		}
	`;

	const query = getQuery<AppQuery>(appQuery);

	function refetch() {
		// Imperatively refetch, to test store updates:
		fetchQuery(environment, appQuery, {});
	}
</script>

<h1>Svelte Relay</h1>

<button on:click={refetch}>Refetch</button>

{#await $query}
	<p>...waiting</p>
{:then data}
	<p>Got data! {data.viewer.randomNumber}</p>
	<ul>
		{#each data.books as book}
			<Book book={book} />
		{/each}
	</ul>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
