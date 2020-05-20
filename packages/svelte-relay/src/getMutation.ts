import { Readable } from "svelte/store";

interface Mutation<T> extends Readable<T> {
	(arg: any): Promise<T>;
}

export function getMutation<T>(): Mutation<T> {
	throw new Error('JK PLS KEEP WORKING ON THIS PROJECT');
}
