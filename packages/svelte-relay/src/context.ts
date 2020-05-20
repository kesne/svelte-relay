import { setContext, getContext } from 'svelte';
import { Environment } from 'relay-runtime';

const RELAY_CONTEXT = Symbol('relay-context');

export function setRelayEnvironment(environment: Environment) {
	setContext(RELAY_CONTEXT, environment);
}

export function getRelayEnvironment(): Environment {
	const environment = getContext(RELAY_CONTEXT);
	if (!environment) {
		throw new Error(
			'The Relay Environment was not found in the current Svelte context. Make sure that you call `setRelayEnvironment(env)`.',
		);
	}
	return environment;
}
