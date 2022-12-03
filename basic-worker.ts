import produce from "immer";
import { Action, createStore } from "redux";
import { allSelectors, selectors } from "./selectors";
import { ActionTypes, BaseSelector, MessageType, StoreState } from "./types";

let init: StoreState = {
  counter: 0,
};

const reduce = produce((draft: StoreState, action: Action<ActionTypes>) => {
  switch (action.type) {
    case "INCREMENT":
      draft.counter++;
      break;
    case "DECREMENT":
      draft.counter--;
      break;
  }
});

const reducer = (state = init, action: Action<ActionTypes>) => {
  const next = reduce(state, action);

  return next;
};

const store = createStore(reducer);

const listeners = new Map<string, BaseSelector>();

addEventListener("message", ({ data }: MessageEvent<MessageType>) => {
  switch (data.type) {
    case "dispatch":
      store.dispatch(data.action);
      break;
    case "subscribe":
      listeners.set(data.uuid, data.selector);
      runSelector(data.selector, data.uuid);
      break;
    case "unsubscribe":
      listeners.delete(data.uuid);
      break;
  }
});

store.subscribe(() => {
  listeners.forEach(runSelector);
});

function runSelector(value: BaseSelector, key: string) {
  const selector = selectors[value.selector];
  const params = value.params ?? [];
  const returnValue: ReturnType<typeof selector> = selector.apply(null, [
    store.getState(),
    ...params,
  ]);

  postMessage({
    uuid: key,
    value: returnValue,
  });
}
