import { Signal, useSignal, useSignalEffect } from "@preact/signals-react";
import { Action } from "redux";
import useDeepCompareEffect from "use-deep-compare-effect";
import { ActionTypes, BaseSelector, SelectorReturn } from "./types";

export const worker = new Worker("./basic-worker.ts", { type: "module" });
const sab = new SharedArrayBuffer(32);
const hasChanged = new Int32Array(sab, 0, 4);

worker.postMessage({ type: "init", sab });

export function dispatch(action: Action<ActionTypes>) {
  worker.postMessage({ type: "dispatch", action });
}

const workerEvent = new Signal<SelectorReturn<unknown> | null>(null);
worker.addEventListener(
  "message",
  ({ data }: MessageEvent<SelectorReturn<unknown>>) => {
    workerEvent.value = data;
  }
);

export function useWorkerStore<T>(
  selector: BaseSelector["selector"],
  ...params: BaseSelector["params"]
) {
  const currentUuid = useSignal("");
  const state = useSignal<T | null>(null);

  useSignalEffect(() => {
    const data = workerEvent.value;
    if (data && data.uuid === currentUuid.peek()) {
      state.value = data.value as T;
    }
  });

  useDeepCompareEffect(() => {
    const uuid = uuidv4();
    currentUuid.value = uuid;
    worker.postMessage({
      type: "subscribe",
      uuid,
      selector: { selector, params },
    });

    // console.log("notify");
    // hasChanged[0] = 1;
    // Atomics.notify(hasChanged, 0);

    return () => {
      worker.postMessage({ type: "unsubscribe", uuid });
    };
  }, [selector, params]);

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
