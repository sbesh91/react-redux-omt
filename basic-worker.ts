import { configureStore } from "@reduxjs/toolkit";
import produce from "immer";
import { Action, createStore } from "redux";
import { ActionTypes } from "./types";
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

export type MessageType =
  | {
      type: "dispatch";
      action: Action<ActionTypes>;
    }
  | { type: "subscribe"; selector: Selector; uuid: string }
  | { type: "unsubscribe"; uuid: string };

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
  }

  if (returnValue !== undefined) {
    postMessage({
      uuid: key,
      value: returnValue,
    });
  }
}

export type Selector =
  | { selector: "one" }
  | {
      selector: "two";
      params: { hello: string };
    };

export type SelectorReturn = {
  uuid: string;
  value: unknown;
};

function one() {
  return store.getState().counter;
}

function two(params: { hello: string }) {
  return `${params.hello} ${one() / 2}`;
}
