import { setContext, getContext } from 'svelte';
import { Environment } from 'relay-runtime';

export const RELAY_CONTEXT = Symbol('relay-context');

export function setRelayEnvironment(environment: Environment) {
	setContext(RELAY_CONTEXT, environment);
}

export function getRelayEnvironment(): Environment {
	return getContext(RELAY_CONTEXT);
}
