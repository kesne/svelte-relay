<script type="typescript">
	import { UserFragment_viewer$key } from './__generated__/UserFragment_viewer.graphql';
	import { getFragment, graphql } from '../../packages/svelte-relay/src';

	export let viewer: UserFragment_viewer$key;

	const data = getFragment(
		graphql`
			fragment UserFragment_viewer on User {
				randomNumber
			}
		`,
		viewer,
	);
</script>

<div>
	<strong>{$data.randomNumber}</strong>
</div>
