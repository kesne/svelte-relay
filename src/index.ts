import { getContext, setContext } from "svelte";
import { readable, Readable } from "svelte/store";
import {
  CacheConfig,
  GraphQLTaggedNode,
  Environment,
  RelayContext,
  RequestParameters,
  Snapshot,
  Variables,
  OperationType,
  getRequest,
  createOperationDescriptor,
  fetchQuery,
} from "relay-runtime";

export type FetchPolicy =
  | "store-only"
  | "store-or-network"
  | "store-and-network"
  | "network-only";

const RELAY_CONTEXT = Symbol("relay-context");

function defer<T>() {
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

export function setRelayEnvironment(environment: Environment) {
  setContext(RELAY_CONTEXT, environment);
}

export function getRelayEnvironment(): Environment {
  return getContext(RELAY_CONTEXT);
}

export function query<TQuery extends OperationType>(
  query: GraphQLTaggedNode,
  variables: TQuery["variables"] = {},
  options?: {
    // fetchKey?: string | number;
    // TODO: Implement:
    fetchPolicy?: FetchPolicy;
    networkCacheConfig?: CacheConfig;
  }
): Readable<Promise<TQuery["response"]>> {
  const environment = getRelayEnvironment();

  const request = getRequest(query);
  const operation = createOperationDescriptor(request, variables);

  const queryObservable = environment
    .execute({ operation, cacheConfig: options?.networkCacheConfig })
    .map(() => environment.lookup(operation.fragment).data);

  // NOTE: We initially set the value to "undefined", which is immedietly overwritten when the
  // store is actually subscribed to.
  return readable<Promise<TQuery["response"]>>(undefined as any, (set) => {
    const { promise, resolve, reject } = defer();

    set(promise);

    let resolved = false;
    const subscription = queryObservable.subscribe({
      next(val) {
        if (!resolved) {
          resolved = true;
          resolve(val);
        }
      },
      error: reject,
      complete: resolve,
    });

    return () => {
      subscription.unsubscribe();
    };
  });
}

export function fragment() {
  throw new Error("NOT YET IMPLEMENTED");
}
