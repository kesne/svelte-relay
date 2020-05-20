import {
	Environment,
	Network,
	RecordSource,
	Store,
	RequestParameters,
	Variables,
} from 'relay-runtime';

async function fetchQuery(request: RequestParameters, variables: Variables) {
	const response = await fetch('https://swapi-graphql.netlify.app/.netlify/functions/index', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({
			query: request.text,
			variables,
		}),
	});

	return response.json();
}

const network = Network.create(fetchQuery);
const store = new Store(new RecordSource());

const environment = new Environment({
	network,
	store,
});

export default environment;
