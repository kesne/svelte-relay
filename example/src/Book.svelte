<script type="typescript">
	import { getFragment, graphql } from '../../packages/svelte-relay/src';
	import { BookFragment_book$key } from './__generated__/BookFragment_book.graphql';

	export let book: BookFragment_book$key;

	const data = getFragment(
		graphql`
			fragment BookFragment_book on Book {
				title
				author
			}
		`,
		book,
	);
</script>

<li>{$data.title} ({$data.author})</li>
