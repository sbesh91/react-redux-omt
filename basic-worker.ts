import produce from "immer";
import createCachedSelector, { LruMapCache } from "re-reselect";
import { Action, createStore } from "redux";
import { createSelector } from "reselect";
import { ActionTypes, MessageType, Selector } from "./types";
interface StoreState {
  counter: number;
}

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

const listeners = new Map<string, Selector>();

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

function runSelector(value: Selector, key: string) {
  let returnValue;
  switch (value.selector) {
    case "one":
      returnValue = one();
      break;
    case "two":
      returnValue = two(value.params);
      break;
    case "three":
      returnValue = three(store.getState());
      break;
    case "four":
      returnValue = four(store.getState(), three(store.getState()));
  }

  if (returnValue !== undefined) {
    postMessage({
      uuid: key,
      value: returnValue,
    });
  }
}

function cacheByValue<T>(_: StoreState, val: T) {
  return "" + val || "";
}

function one() {
  return store.getState().counter;
}

function two(params: { hello: string }) {
  return `${params.hello} ${one() / 2}`;
}

const three = createSelector(
  (state: StoreState) => state,
  (state) => {
    return state.counter * 2;
  }
);

const four = createCachedSelector(
  (state: StoreState) => state,
  (_, val: number) => val,
  (_, val) => {
    return val * 3;
  }
)({
  keySelector: cacheByValue,
  cacheObject: new LruMapCache({ cacheSize: 5 }),
});
