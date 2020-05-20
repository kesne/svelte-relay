import { graphql } from 'relay-runtime';
import { readable } from 'svelte/store';
import data from './data';

export { graphql };

export { setRelayEnvironment, getRelayEnvironment } from './context';

export function getFragment(fragment: any) {
	return data.allFilms.edges[0].node;
}

export { getQuery } from './getQuery';
