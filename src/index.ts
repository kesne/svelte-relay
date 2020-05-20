import { graphql } from 'relay-runtime';
import { readable } from 'svelte/store';
import data from './data';

export { graphql };

export function getFragment(fragment: any) {
	return data.allFilms.edges[0].node;
}

const createStore = () =>
	readable(null, (set) => {
		setTimeout(() => {
			set(data);
		}, 2000);
	});

export function getQuery(query: any) {
	const store = createStore();
	return {
		then(resolved: any, rejected: any) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve();
				}, 2000);
			}).then(resolved, rejected);
		},
		subscribe(...args: any) {
			return store.subscribe(...args);
		},
	};
}
