<script type="typescript">
	import { getQuery, setRelayEnvironment } from '../src';
	import Movie from './Movie.svelte';
	import environment from './environment';
	import AppQueryQuery from './AppQuery';
	import { AppQuery } from './__generated__/AppQuery.graphql';

	setRelayEnvironment(environment);

	const query = getQuery<AppQuery>(AppQueryQuery);
</script>

<h1>Svelte Relay</h1>

<!-- TODO: Change to $query when the language server supports it: -->
{#await query}
	<p>...waiting</p>
{:then data}
	<ul>
		{#each ((data.allFilms || {}).edges || []) as edge}
			{#if edge && edge.node}
				<Movie movie={edge.node} />
			{/if}
		{/each}
	</ul>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
