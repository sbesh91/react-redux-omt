import { Signal, useSignal, useSignalEffect } from "@preact/signals-react";
import { useEffect, createContext, useContext } from "react";
import { Action } from "redux";
import { ActionTypes, Selector, SelectorReturn } from "./types";

export const worker = new Worker("./basic-worker.ts", { type: "module" });
interface StoreProviderProps {
  worker: Worker;
}
export const StoreProvider = createContext<StoreProviderProps>({
  worker: <Worker>{},
});

export function useStoreProvider() {
  return useContext(StoreProvider);
}

export function useDispatch() {
  return (action: Action<ActionTypes>) => {
    worker.postMessage({ type: "dispatch", action });
  };
}

const workerEvent = new Signal<SelectorReturn<unknown> | null>(null);
worker.addEventListener(
  "message",
  ({ data }: MessageEvent<SelectorReturn<unknown>>) => {
    workerEvent.value = data;
  }
);

export function useWorkerStore<T>(selector: Selector) {
  const currentUuid = useSignal("");
  const state = useSignal<T | null>(null);

  useSignalEffect(() => {
    const data = workerEvent.value;
    if (data?.uuid === currentUuid.peek()) {
      state.value = data.value as T;
    }
  });

  useEffect(() => {
    const uuid = uuidv4();
    currentUuid.value = uuid;
    worker.postMessage({ type: "subscribe", uuid, selector });

    return () => {
      worker.postMessage({ type: "unsubscribe", uuid });
    };
  }, []);

  return state;
}

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
