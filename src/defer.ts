export default function defer<T>() {
	let resolve: (value?: T | PromiseLike<T> | undefined) => void;
	let reject: (reason: any) => void;

	const promise = new Promise<T>((innerResolve, innerReject) => {
		resolve = innerResolve;
		reject = innerReject;
	});

	return {
		promise,
		resolve: resolve!,
		reject: reject!,
	};
}
