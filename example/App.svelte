<script>
	import { readable } from 'svelte/store';
	import { getQuery } from '../src/';
	import AppQuery from './AppQuery';
	import Movie from './Movie.svelte';

	// const promise = getQuery(AppQuery);

	// IDEA 1: Hooks-like design:
	// const { data, loading, error } = getQuery(AppQuery);

	// IDEA 2: Up-front provide a readable store for updated data:
	// const [promise, data] = getQuery(AppQuery);

	// IDEA 3: We do something a little bonkers
	const query = getQuery(AppQuery);
</script>

<h1>Svelte Relay</h1>

{#await query}
	<p>...waiting</p>
{:then}
	<ul>
		{#each $query.allFilms.edges as edge}
			<Movie />
		{/each}
	</ul>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
