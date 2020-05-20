<script>
	import { getQuery } from '../src/';
	import AppQuery from './AppQuery';

	const promise = getQuery(AppQuery);
</script>

<h1>Svelte Relay</h1>

{#await promise}
	<p>...waiting</p>
{:then data}
	<p>The data is {JSON.stringify(data)}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
