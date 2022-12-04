import { configureStore } from "@reduxjs/toolkit";
import { Action, combineReducers } from "redux";
import { counterSliceReducer, counterStoreState } from "./actions";
import { selectors } from "./selectors";
import { BaseSelector, MessageType, RootState } from "./types";

const rootReducer = combineReducers({
  counterSliceReducer,
});

const init: RootState = {
  counterSliceReducer: counterStoreState,
};

const reducer = (state: RootState = init, action: Action) => {
  const next = rootReducer(state, action);

  return next;
};

const store = configureStore({
  reducer,
});

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
