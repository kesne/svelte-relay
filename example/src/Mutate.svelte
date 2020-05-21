<script type="typescript">
	import { graphql, getMutation } from '../../packages/svelte-relay/src';
	import { MutateMutation } from './__generated__/MutateMutation.graphql';

	const commit = getMutation<MutateMutation>(graphql`
		mutation MutateMutation {
			doSomethingToUser {
				id
				randomNumber
			}
		}
	`);

	async function handleClick() {
		await commit();
	}
</script>

<div>Data: {JSON.stringify($commit.data)}</div>
<div>Error: {JSON.stringify($commit.error)}</div>
<div>InFlight: {JSON.stringify($commit.isInFlight)}</div>

<button disabled={$commit.isInFlight} on:click={handleClick}>Mutate</button>
