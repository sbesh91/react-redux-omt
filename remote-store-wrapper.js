import { proxy } from "comlink";

export default async function(store) {
  const subscribers = new Set();

  let latestState = await store.getState();
  store.subscribe(
    proxy(async () => {
      latestState = await store.getState();
      subscribers.forEach(f => f());
    })
  );
  return {
    dispatch: action => store.dispatch(action),
    getState: () => latestState,
    subscribe: listener => {
      subscribers.add(listener);
      return () => subscribers.delete(listener);
    },
    replaceReducer: () => {
      throw new Error("Can’t transfer a function");
    }
  };
}
