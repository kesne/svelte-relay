import { readable, Readable } from 'svelte/store';

declare type Subscriber<T> = (value: T) => void;
declare type Unsubscriber = () => void;

/*
 * Wraps svelte's readable store, but without the requirement for providing an initial value up-front.
 */
export function createStore<T>(
	creator: (setValue: Subscriber<T>) => Unsubscriber,
): Readable<T> {
	// NOTE: We intentionally use `any` here because we expect the store to actually be initialized in the store creator function:
	return readable(null as any, (set) => {
		return creator(set);
	});
}
