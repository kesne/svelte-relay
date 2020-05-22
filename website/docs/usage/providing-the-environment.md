---
title: Providing The Environment
---

In order to use the `svelte-relay` package, you must provide a Relay Environment to the Svelte Context. This is used to autoamtically provide the environment to all components in your Svelte application.

For details on how to construct a Relay Environment, [refer to the Relay Documentation](https://relay.dev/docs/en/relay-environment).

The environment can be provided using the `setRelayEnvironment` function. Usually, this function is called once at the very root of the application, in order to set the Relay environment for the whole application.

```html title="App.svelte"
<script>
	import { setRelayEnvironment } from 'svelte-relay';
	import environment from './myEnvironment.js';

	setRelayEnvironment(environment);
</script>
```

## Getting the Environment

The `svelte-relay` package also exports a `getRelayEnvironment()` function, which can be used to get the current Relay Environment from the Svelte Context. If no environment is found, an error will be thrown.
