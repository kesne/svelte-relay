import {
	GraphQLTaggedNode,
	getFragment as relayGetFragment,
	getSelector,
	createOperationDescriptor,
	ReaderSelector,
	PluralReaderSelector,
	Disposable,
	Snapshot,
} from 'relay-runtime';
import { Readable } from 'svelte/store';
import { getFragment } from '../getFragment';
import { getRelayEnvironment } from '../utils/context';
import { createStore } from '../utils/createStore';

type KeyReturnType<T extends KeyType> = (arg: T) => NonNullable<T[' $data']>;
interface KeyType {
	readonly ' $data'?: unknown;
}
type FragmentReturnType<TKey extends KeyType> = ReturnType<KeyReturnType<TKey>>;
export type FragmentResult<TKey extends KeyType> = Readable<FragmentReturnType<TKey>>;

function isPluralSelector(selector: ReaderSelector): selector is PluralReaderSelector {
	return selector.kind === 'PluralReaderSelector';
}

interface RefetchableFragmentResult<T> {
	data: T;
	refetch: 'TODO';
}

export function getRefetchableFragment<TKey extends KeyType>(
	fragmentGql: GraphQLTaggedNode,
	parentFragmentRef: TKey,
): RefetchableFragmentResult<FragmentResult<TKey>> {
	const environment = getRelayEnvironment();

	let fragmentRef = parentFragmentRef;

	const data = getFragment(fragmentGql, fragmentRef);

	function refetch() {
		if (parentFragmentRef == null) {
			console.warn(
				`Relay: Unexpected call to "refetch" while using a null fragment ref for fragment "${fragmentNode.name}".
				When calling "refetch", we expect initial fragment data to be non-null.
				Please make sure you're passing a valid fragment ref before calling "refetch", or make sure you pass all required variables to "refetch".`,
			);
		}

		const refetchQuery = createOperationDescriptor(
			refetchableRequest,
			refetchVariables,
			{force: true},
		);

		// We call loadQuery which will start a network request if necessary
		// and update the querRef from useQueryLoader.
		// Note the following:
		// - loadQuery will dispose of any previously refetched queries.
		// - We use the variables extracted off the OperationDescriptor
		// so that they have been filtered out to include only the
		// variables actually declared in the query.
		loadQuery(refetchQuery.request.variables, {
			fetchPolicy,
			__environment: refetchEnvironment,
			__nameForWarning: 'refetch',
		});
	}

	return {
		data,
		refetch: 'TODO',
	};
}
