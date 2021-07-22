<p align="center">
	<img width="200" src="https://raw.githubusercontent.com/kesne/svelte-relay/master/website/static/img/svelte-relay-logo.png" alt="Svelte Relay Logo" />
</p>
<h1 align="center">Svelte Relay</h1>
<p align="center"><b>Easily use GraphQL in Svelte, powered by the production-ready Relay runtime.</b></p>

## Features

[Relay](https://relay.dev) bindings for [Svelte](https://svelte.dev).

## Example

### 1. Set the Relay Environment into the context

```svelte
<script>
	import { setRelayEnvironment } from 'svelte-relay';
	import myEnvironment from './environment';

	setRelayEnvironment(myEnvironment);
</script>
```

### 2. Write Queries

```svelte
<script>
	import { getQuery } from 'svelte-relay';
	// This is defined in the next section below.
	import Artist from './Artist';

	const query = getQuery(
		graphql`
			query ArtistQuery($artistID: String!) {
				# The root field for the query
				artist(id: $artistID) {
					# A reference to your fragment container
					...ArtistHeader_artist
				}
			}
		`,
		{
			artistID: 'some-id',
		},
	);
</script>

{#await $query}
	<div>Loading</div>
{:then data}
	<Artist artist="{data.artist}" />
{:catch error}
	<div>{error.message}</div>
{/await}
```

### 3. Use Fragments

```svelte
<script>
	import { getFragment } from 'svelte-relay';

	export let artist;

	const data = getFragment(
		graphql`
			# This fragment is declaring that this component
			# needs an Artist, and these specific fields on
			# the Artist in order to render. Relay will
			# guarantee that this data is fetched and available
			# for this component.
			fragment ArtistHeader_artist on Artist {
				href
				bio
				name
				image {
					url
				}
			}
		`,
		artist,
	);
</script>

<a href="{data.href}">
	<img src="{data.image.url}" />
	<div>
		<h1>{data.name}</h1>
		<h3>{data.bio}</h3>
	</div>
</a>
```
