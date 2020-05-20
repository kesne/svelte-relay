<script>
	import { getFragment } from '../src';
	import MovieFragment from './MovieFragment';

	const data = getFragment(MovieFragment);
</script>

<li>{data.title} ({data.releaseDate})</li>
