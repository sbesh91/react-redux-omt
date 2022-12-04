import { configureStore } from "@reduxjs/toolkit";
import { Action } from "redux";
import { counterReducer } from "./actions";
import { selectors } from "./selectors";
import { BaseSelector, MessageType, StoreState } from "./types";

let init: StoreState = {
  counter: 0,
};

const _counterReducer = counterReducer(init);

const reducer = (state = init, action: Action) => {
  const next = _counterReducer(state, action);

  return next;
};

const store = configureStore({
  reducer,
});

const listeners = new Map<string, BaseSelector>();

let buffer: SharedArrayBuffer;

addEventListener("message", ({ data }: MessageEvent<MessageType>) => {
  switch (data.type) {
    case "init": {
      buffer = data.sab;
      break;
    }
    case "dispatch":
      store.dispatch(data.action);
      break;
    case "subscribe":
      // while (true) {
      //   if (!buffer) {
      //     break;
      //   }
      //   console.log("wait");
      //   const hasChanged = new Int32Array(buffer, 0, 4);
      //   Atomics.wait(hasChanged, 0, 0);
      //   hasChanged[0] = 0;
      //   console.log("notified");
      //   break;
      // }
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
