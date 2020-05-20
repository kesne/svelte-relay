<script type="typescript">
	import { getFragment } from '../src';
	import MovieFragment from './MovieFragment';
	import { MovieFragment_film$key } from './__generated__/MovieFragment_film.graphql';

	export let movie: MovieFragment_film$key;

	const data = getFragment(MovieFragment, movie);
</script>

<li>{$data.title} ({$data.releaseDate})</li>
