# svelte-relay

[Relay](https://relay.dev) bindings for [Svelte](https://svelte.dev).

## Overal Design Process

1. Establishing the principles behind what we're building.
	- Svelte-like API that leans into Svelte's unique functionality.
		   - Leverage promises a lot, and use Svelte stores.
	- Feel familiar to anyone coming from React Relay.
	- Use the code and type generation provided by the Relay Compiler.
		   - **Eventually** we will build a language extension for the Relay Compiler, but for now we will not, so all GraphQL queries will be kept in separate .js files.
2. Design the API. We'll do this by actually using the API, and we will MOCK the **implemention**.
3. Implement as quickly as possible.
	- Cut corners!
	- Implement the MVP, not the complete end product!
	- Take on tech debt (thoughtfully, carefully, the correct debt)!
4. Polish and publish
