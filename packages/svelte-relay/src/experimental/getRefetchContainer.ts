import { readable, derived, Readable } from 'svelte/store';
import { QueryResult } from '../getQuery';

export function getRefetchContainer() {
	let hasResolved = false;
	let previousValue: any;

	let setState = (state: any) => {};
	const dataStore = readable({ isInFlight: false }, (set) => {
		setState = set;
	});

	function refetchContainer<T extends QueryResult<any>>(query: T): Readable<T> {
		const derivedStore = derived(query, ($query: any, set: any) => {
			setState({ isInFlight: true });

			if (!hasResolved) {
				$query.then(() => {
					previousValue = $query;
					hasResolved = true;
					setState({ isInFlight: false });
				});
				set($query);
			} else {
				$query.then(() => {
					previousValue = $query;
					set($query);
					setState({ isInFlight: false });
				});
				set(previousValue);
			}
		});

		return derivedStore as any;
	}

	// @ts-ignore
	refetchContainer.subscribe = (...args) => dataStore.subscribe(...args);

	return refetchContainer;
}
