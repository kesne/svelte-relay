<script>
	import { getFragment } from '../src';
	import MovieFragment from './MovieFragment';

	export let movie;

	const data = getFragment(MovieFragment, movie);
</script>

<li>{$data.title} ({$data.releaseDate})</li>
