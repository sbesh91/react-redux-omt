import { proxy } from "comlink";
import { applyPatches } from "immer";

export default async function (store) {
  const subscribers = new Set();

  let latestState = await store.getState();

  const cb = proxy(async () => {
    const patches = await store.getPatches();

    latestState = applyPatches(latestState, patches);

    subscribers.forEach((f) => f());
  });

  store.subscribe(cb);

  return {
    dispatch: (action) => store.dispatch(action),
    getState: () => latestState,
    subscribe: (listener) => {
      subscribers.add(listener);
      return () => subscribers.delete(listener);
    },
    replaceReducer: () => {
      throw new Error("Can’t transfer a function");
    },
  };
}
