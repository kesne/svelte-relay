<script>
	const commit = getMutation(MutateMutation);

	async function handleClick() {
		await mutation({
			variables: {},
		});
	}
</script>

<button disabled={$commit.isInFlight} on:click={handleClick}>Mutate</button>
