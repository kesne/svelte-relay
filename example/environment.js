import { Environment, Network, RecordSource, Store } from 'relay-runtime';

function fetchQuery(operation, variables) {
	return fetch('https://swapi-graphql.netlify.app/.netlify/functions/index', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({
			query: operation.text,
			variables,
		}),
	}).then((response) => {
		return response.json();
	});
}

const network = Network.create(fetchQuery);
const store = new Store(new RecordSource());

const environment = new Environment({
	network,
	store,
});

export default environment;
