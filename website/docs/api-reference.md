---
title: API Reference
---

All methods are named exports from the `svelte-relay` package.

:::warning This Document Is Incomplete
This API documentation is not complete. Currently, I recommend reading the "Using Svelte Relay" documents, as they contain more detailed information about how to use the library.
:::

:::caution Not For Beginners
This documentation is not the most approachable, and is written to be a comprehensive overview of the public API of the package. If you're getting started with the package, I recommend you read the [Using Svelte Relay](http://localhost:3000/svelte-relay/docs/usage/providing-the-environment) guide instead.
:::

## Svelte APIs

These APIs work in Svelte components, and may not be used outside of Svelte.

### `setRelayEnvironment()`

Sets a Relay Environent in the [Svelte Context](https://svelte.dev/tutorial/context-api). Any Svelte component that is under the component tree of the component that calls this method can access the Relay Environment by calling `getRelayEnvironment()`.

For details on how to create a Relay Environment, you can reference [the Relay documentation](https://relay.dev/docs/en/relay-environment).

**Arguments:**

- **`env: Environment`** - The environment to set in the Svelte context.

### `getRelayEnvironment()`

Gets the current Relay Environment from the Svelte Context. If no environment is found, an error will be thrown.

**Return:** `Environment`

## General APIs

These APIs work outside of Svelte, and can be called at any time.

### `graphql`

A function that is used as a [tagged template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). This function is used by the Relay Compiler to generate artifacts for your GraphQL queries.

**Arguments:**

- **`source: string`** - The raw text for the GraphQL query. This must be defined statically in a template literal to be understood by the Relay Compiler.

**Return:** `GraphQLTag` - A tagged GraphQL query.

:::note
This method is never be called in production, and is instead used to define GraphQL queries so that the Relay Compiler can generate code.
:::
