import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import {
  BaseSelector,
  MessageType,
  RootState,
  SelectorFunction,
  WorkerSelector,
} from "types";

let selectors: Record<string, WorkerSelector<SelectorFunction>> | undefined;

const listeners = new Map<string, BaseSelector>();

export function initializeWorkerStore(
  store: ToolkitStore<RootState>,
  s: Record<string, WorkerSelector<SelectorFunction>>
) {
  selectors = s;

  addEventListener("message", ({ data }: MessageEvent<MessageType>) => {
    switch (data.type) {
      case "dispatch":
        store.dispatch(data.action);
        break;
      case "subscribe":
        listeners.set(data.uuid, data.selector);
        runSelector(store.getState(), data.selector, data.uuid);
        break;
      case "unsubscribe":
        listeners.delete(data.uuid);
        break;
    }
  });

  store.subscribe(() => {
    listeners.forEach((value, key) =>
      runSelector(store.getState(), value, key)
    );
  });
}

export function runSelector(
  state: RootState,
  value: BaseSelector,
  key: string
) {
  const selector: SelectorFunction<unknown> | undefined =
    selectors?.[value.selector]?.fn;
  const params = value.params ?? [];
  if (selector) {
    const returnValue = selector(state, ...params);

    postMessage({
      uuid: key,
      value: returnValue,
    });
  }
}

export function createWorkerSelector<T>(
  name: string,
  selector: T
): WorkerSelector<T> {
  return {
    name,
    fn: selector,
  };
}
