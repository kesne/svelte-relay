---
title: Getting Started
---

Before getting started, it is best to understand the core concepts of Relay. It is likely best to read the [Relay Getting Started guide](https://relay.dev/docs/en/quick-start-guide) to familiarize yourself with Relay.

Svelte Relay consists of two packages:

- **`svelte-relay`** - Provides the runtime functionality for using Relay in Svelte.
- **`relay-compiler-language-svelte`** - Provides support for Svelte files to be supported in the Relay Compiler.

The code that is generated from the Relay Compiler is TypeScript, using the `.ts` extension. To accomodate this, your project will need be able to handle TypeScript files. The [TypeScript documentation](https://www.typescriptlang.org/docs/home.html) contains examples for how to integrate TypeScript into your project.

## Installing

To install Svelte Relay into an existing project, you must install the base package, along with the package language to add Svelte support to the Relay Compiler:

```bash
npm install svelte-relay
npm install relay-compiler relay-compiler-language-svelte --save-dev
```

## Configuring babel

Relay requires a Babel plugin to convert the GraphQL queries to runtime artifacts.

```bash
npm install babel-plugin-relay graphql --save-dev
```

Once the package is installed, you will need to configure Babel to use this plugin.

```json title=".babelrc"
{
	"plugins": ["relay"]
}
```

Please note that the "relay" plugin should run before other plugins or presets to ensure the graphql template literals are correctly transformed. See [Babel's documentation on this topic](https://babeljs.io/docs/en/plugins/#pluginpreset-ordering).

Alternatively, instead of using `babel-plugin-relay`, you can use Relay with [`babel-plugin-macros`](https://github.com/kentcdodds/babel-plugin-macros). After installing `babel-plugin-macros` and adding it to your Babel config, you can use the macro in your project:

```js
const graphql = require('babel-plugin-relay/macro');

const AppQuery = graphql`
	query AppQuery {
		# ...
	}
`;
```

## Configuring the Relay Compiler

While you can configure Relay with CLI arguments, we recommend using the `relay-config` package to configure the Relay Compiler.

```bash
npm install relay-config --save-dev
```

With this package installed, can then create a `relay.config.js` file, where you can provide configuration to the relay comiler.

```js title="relay.config.js"
module.exports = {
	src: './src',
	schema: './server/schema.graphql',
	language: 'svelte',
};
```

**Relay Compiler Documentation:** https://relay.dev/docs/en/installation-and-setup#set-up-relay-compiler
