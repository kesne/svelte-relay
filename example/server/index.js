const fs = require('fs');
const path = require('path');
const { ApolloServer, gql } = require('apollo-server');

const wait = (number) => new Promise((resolve) => setTimeout(resolve, number));

const books = [
	{
		title: 'Harry Potter and the Chamber of Secrets',
		author: 'J.K. Rowling',
	},
	{
		title: 'Jurassic Park',
		author: 'Michael Crichton',
	},
];

const user = {
	id: 1,
	firstName: 'Jordan',
	lastName: 'Gensler',
};

const typeDefs = gql(fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'));

const resolvers = {
	Query: {
		echo: (_parent, { input }) => input,
		books: async () => {
			await wait(1000);
			return books;
		},
		viewer: async () => {
			await wait(1000);
			return user;
		},
	},
	Mutation: {
		doSomethingToUser: () => user,
	},
	User: {
		randomNumber: () => Math.random(),
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
