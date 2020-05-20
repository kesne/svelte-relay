import { graphql } from '../src';

export default graphql`
	query AppQuery {
		allFilms {
			edges {
				node {
					id
					title
				}
			}
		}
	}
`;
