import { readable, derived } from 'svelte/store';
import { QueryResult } from '../getQuery';

export function getRefetchContainer() {
	let hasResolved = false;
	let previousValue;

	let setState = () => {};
	const dataStore = readable({ isInFlight: false }, (set) => {
		setState = set;
	});

	function refetchContainer<T extends QueryResult<any>>(query: T): T {
		const derivedStore = derived(query, ($query, set) => {
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

		return derivedStore;
	}

	refetchContainer.subscribe = dataStore.subscribe.bind(dataStore);

	return refetchContainer;
}
