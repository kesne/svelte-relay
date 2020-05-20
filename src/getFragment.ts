import { GraphQLTaggedNode, getFragment as relayGetFragment, getSelector } from 'relay-runtime';
import { getRelayEnvironment } from './context';
import { Readable, readable } from 'svelte/store';

type $Call<Fn extends (...args: any[]) => any> = Fn extends (arg: any) => infer RT ? RT : never;
type KeyReturnType<T extends KeyType> = (arg: T) => NonNullable<T[' $data']>;

interface KeyType {
	readonly ' $data'?: unknown;
}

export function getFragment<TKey extends KeyType>(
	fragmentInput: GraphQLTaggedNode,
	fragmentRef: TKey,
): Readable<$Call<KeyReturnType<TKey>>> {
	const environment = getRelayEnvironment();

	// TODO: Actually get store updates:
	return readable(null as any, (set) => {
		const fragmentNode = relayGetFragment(fragmentInput);
		const fragmentSelector = getSelector(fragmentNode, fragmentRef);

		const snapshot =
			fragmentSelector.kind === 'PluralReaderSelector'
				? fragmentSelector.selectors.map((s) => environment.lookup(s))
				: environment.lookup(fragmentSelector);
		const fragmentOwner =
			fragmentSelector.kind === 'PluralReaderSelector'
				? fragmentSelector.selectors[0].owner
				: fragmentSelector.owner;
		const parentQueryName = fragmentOwner.node.params.name ?? 'Unknown Parent Query';

		set(snapshot.data);
	});
}
