import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { counterSliceReducer, counterStoreState } from "./actions";
import { selectors } from "./selectors";
import {
  BaseSelector,
  MessageType,
  RootState,
  SelectorFunction,
} from "./types";

const rootReducer = combineReducers({
  counterSliceReducer,
});

const init: RootState = {
  counterSliceReducer: counterStoreState,
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: init,
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
  const selector: SelectorFunction<unknown> | undefined =
    selectors[value.selector]?.fn;
  const params = value.params ?? [];
  if (selector) {
    const returnValue = selector(store.getState(), params);

    postMessage({
      uuid: key,
      value: returnValue,
    });
  }
}
