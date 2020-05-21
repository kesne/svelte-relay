<script type="typescript">
	import {
		getQuery,
		setRelayEnvironment,
		graphql,
	} from '../../packages/svelte-relay/src';
	import { fetchQuery } from 'relay-runtime';
	import Book from './Book.svelte';
	import User from './User.svelte';
	import Mutate from './Mutate.svelte';
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
				...UserFragment_viewer
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

<Mutate />

<button on:click={refetch}>Refetch</button>

{#await $query}
	<p>...waiting</p>
{:then data}
	<p>Got data! {data.viewer.randomNumber}</p>
	<User viewer={data.viewer} />
	<ul>
		{#each data.books as book}
			<Book {book} />
		{/each}
	</ul>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
