import { readable, Readable } from 'svelte/store';

declare type Subscriber<T> = (value: T) => void;
declare type Unsubscriber = () => void;

/*
 * Wraps svelte's readable store, but without the requirement for providing an initial value up-front.
 */
export default function createStore<T>(
	creator: (setValue: Subscriber<T>) => Unsubscriber,
): Readable<T> {
	return readable(null as any, (set) => {
		return creator(set);
	});
}
