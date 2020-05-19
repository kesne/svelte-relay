import { getContext, setContext } from "svelte";
import { readable } from "svelte/store";
import { Environment } from "relay-runtime";

const RELAY_CONTEXT = Symbol("relay-context");

export function setRelayEnvironment(environment: Environment) {
  setContext(RELAY_CONTEXT, environment);
}

export function getRelayEnvironment() {
  return getContext(RELAY_CONTEXT);
}

export function fragment() {}
export function query() {}
