import { graphql } from 'relay-runtime';

export { graphql };

export function getQuery() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('world');
		}, 2000);
	});
}
