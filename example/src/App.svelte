<script type="typescript">
	import {
		getQuery,
		setRelayEnvironment,
		graphql,
		QueryResult,
	} from '../../packages/svelte-relay/src';
	import Movie from './Movie.svelte';
	import environment from './environment';
	import { AppQuery } from './__generated__/AppQuery.graphql';

	setRelayEnvironment(environment);

	let renderCount = 0;
	let query: QueryResult<AppQuery>;
	$: {
		console.log('render count: ', renderCount);
		query = getQuery<AppQuery>(graphql`
			query AppQuery {
				books {
					...BookFragment_book
				}
			}
		`);
	}
</script>

<h1>Svelte Relay</h1>

<button on:click={() => renderCount++}>Re-Fetch</button>

<!-- TODO: Change to $query when the language server supports it: -->
{#await query}
	<p>...waiting</p>
{:then data}
	<p>Got data!</p>
	<ul>
		{#each (data.allFilms || {}).edges || [] as edge}
			{#if edge && edge.node}
				<Movie movie={edge.node} />
			{/if}
		{/each}
	</ul>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
