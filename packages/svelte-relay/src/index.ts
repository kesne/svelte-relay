export { graphql, fetchQuery } from 'relay-runtime';
export { setRelayEnvironment, getRelayEnvironment } from './utils/context';
export { getFragment, FragmentResult } from './getFragment';
export { getQuery, QueryResult } from './getQuery';
export { getMutation, MutationResult } from './getMutation';
export { getSubscription } from './getSubscription';

// Export experimental APIs
import * as experiemental from './experimental';
export { experiemental };
