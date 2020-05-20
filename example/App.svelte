<script type="typescript">
	import { getQuery, setRelayEnvironment, graphql } from '../src';
	import Movie from './Movie.svelte';
	import environment from './environment';
	import { AppQuery } from './__generated__/AppQuery.graphql';

	setRelayEnvironment(environment);

	const query = getQuery<AppQuery>(graphql`
		query AppQuery {
			allFilms {
				edges {
					node {
						id
						...MovieFragment_film
					}
				}
			}
		}
	`);
</script>

<h1>Svelte Relay</h1>

<!-- TODO: Change to $query when the language server supports it: -->
{#await query}
	<p>...waiting</p>
{:then data}
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
