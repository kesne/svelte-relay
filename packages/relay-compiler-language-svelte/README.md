# relay-compiler-language-svelte

A language plugin for [Relay](https://relay.dev/) that adds
[Svelte](https://svelte.dev/) support, and emits TypeScript type definitions.

This plugin is based on the `[relay-compiler-language-typescript](https://github.com/relay-tools/relay-compiler-language-typescript)` package.

## Installation

Add the package to your dev dependencies:

```bash
# Install the Relay compiler:
yarn add relay-compiler --dev
# Install language support for Svelte:
yarn add relay-compiler-language-svelte --dev
```

## Configuration

### relay-compiler

You can configure the `relay-compiler` to use the language plugin:

```bash
relay-compiler --src ./src --schema schema.graphql --language svelte
```

It's recommended that this is used as a `package.json` script:

```json
{
	"scripts": {
		"relay": "relay-compiler --src ./src --schema schema.graphql --language svelte"
	}
}
```

If you use the `relay-config` package, you can also configure this in the `relay.config.js` file:

```js
module.exports = {
	src: './src',
	schema: 'schema.graphql',
	language: 'svelte',
};
```
