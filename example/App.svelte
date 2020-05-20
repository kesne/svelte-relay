<script>
	import { readable } from 'svelte/store';
	import { getQuery, setRelayEnvironment } from '../src/';
	import AppQuery from './AppQuery';
	import Movie from './Movie.svelte';
	import environment from './environment';

	setRelayEnvironment(environment);

	const query = getQuery(AppQuery);
</script>

<h1>Svelte Relay</h1>

{#await query}
	<p>...waiting</p>
{:then}
	<ul>
		{#each $query.allFilms.edges as edge}
			<Movie movie={edge.node} />
		{/each}
	</ul>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
