import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import {
  SelectorReference,
  MessageType,
  SelectorFunction,
  WorkerSelector,
} from "./types";

let selectors: Record<string, WorkerSelector<SelectorFunction>> | undefined;

const listeners = new Map<string, SelectorReference>();

function initializeWorkerStore<T>(
  store: ToolkitStore<T>,
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

  function runSelector(value: SelectorReference, key: string) {
    const selector: SelectorFunction<unknown> | undefined =
      selectors?.[value.selector]?.fn;
    const params = value.params ?? [];
    if (selector) {
      const returnValue = selector(store.getState(), ...params);

      postMessage({
        uuid: key,
        value: returnValue,
      });
    }
  }
}

function createWorkerSelector<T>(name: string, selector: T): WorkerSelector<T> {
  return {
    name,
    fn: selector,
  };
}

export { initializeWorkerStore, createWorkerSelector };
