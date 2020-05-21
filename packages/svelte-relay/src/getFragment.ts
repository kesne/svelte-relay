import {
	GraphQLTaggedNode,
	getFragment as relayGetFragment,
	getSelector,
	ReaderSelector,
	PluralReaderSelector,
	Disposable,
	Snapshot,
} from 'relay-runtime';
import { Readable } from 'svelte/store';
import { getRelayEnvironment } from './context';
import createStore from './createStore';

type KeyReturnType<T extends KeyType> = (arg: T) => NonNullable<T[' $data']>;
interface KeyType {
	readonly ' $data'?: unknown;
}
type FragmentReturnType<TKey extends KeyType> = ReturnType<KeyReturnType<TKey>>;
export type FragmentResult<TKey extends KeyType> = Readable<FragmentReturnType<TKey>>;

function isPluralSelector(selector: ReaderSelector): selector is PluralReaderSelector {
	return selector.kind === 'PluralReaderSelector';
}

// TODO: Handle fragments isMissingData.
export function getFragment<TKey extends KeyType>(
	fragmentGql: GraphQLTaggedNode,
	fragmentRef: TKey,
): FragmentResult<TKey> {
	const environment = getRelayEnvironment();

	// Note: We intentionally type the store as `any` here since
	return createStore<any>((set) => {
		const fragmentNode = relayGetFragment(fragmentGql);
		const fragmentSelector = getSelector(fragmentNode, fragmentRef);

		const snapshot = isPluralSelector(fragmentSelector)
			? fragmentSelector.selectors.map((s) => environment.lookup(s))
			: environment.lookup(fragmentSelector);

		const subscriptions: Set<Disposable> = new Set();

		if (Array.isArray(snapshot)) {
			let snapshots = snapshot;

			const setData = () => {
				set(snapshots.map((s) => s.data));
			};

			const updateSnapshots = (nextSnapshot: Snapshot, index: number) => {
				const nextSnapshots = [...snapshots];
				nextSnapshots[index] = nextSnapshot;
				snapshots = nextSnapshots;
				setData();
			};

			snapshot.forEach((s, i) => {
				subscriptions.add(
					environment.subscribe(s, (nextSnapshot) => {
						updateSnapshots(nextSnapshot, i);
					}),
				);
			});

			setData();
		} else {
			set(snapshot.data);
			subscriptions.add(
				environment.subscribe(snapshot, (nextSnapshot) => {
					set(nextSnapshot.data);
				}),
			);
		}

		return () => {
			subscriptions.forEach((subscription) => {
				subscription.dispose();
			});
			subscriptions.clear();
		};
	});
}
