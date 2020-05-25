<script type="typescript">
	import {
		getQuery,
		graphql,
	} from '../../packages/svelte-relay/src/experimental';

	let page = 0;
	const [query, state] = getQuery(graphql`
		query ExperimentalQuery {
			viewer {
				id
				firstName
				lastName
				randomNumber
			}
		}
	`);
</script>

<div style="background: rgba(0, 0, 0, 0.1); padding: 16px">
	<h4>Experimental</h4>

	<div>Loading: {$state.isInFlight}</div>

	{#await $query({ page })}
		<p>...waiting</p>
	{:then data}
		<div>data {JSON.stringify(data)}</div>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
	<button on:click={() => page += 1}>Next Page</button>
</div>
