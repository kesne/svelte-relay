import { graphql } from '../src';

export default graphql`
	fragment MovieFragment_film on Film {
		title
		releaseDate
	}
`;
