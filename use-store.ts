import { Signal, useSignal, useSignalEffect } from "@preact/signals-react";
import { Action } from "redux";
import useDeepCompareEffect from "use-deep-compare-effect";
import { SelectorFunction, SelectorReturn, WorkerSelector } from "./types";

const worker = new Worker("./worker.ts", { type: "module" });
const workerEvent = new Signal<SelectorReturn<unknown> | null>(null);

worker.addEventListener(
  "message",
  ({ data }: MessageEvent<SelectorReturn<unknown>>) => {
    workerEvent.value = data;
  }
);

export function dispatch(action: Action) {
  worker.postMessage({ type: "dispatch", action });
}

export function useWorkerSelector<
  Fn extends SelectorFunction<T>,
  Params extends Parameters<Fn>,
  T
>(selector: WorkerSelector<Fn>, ...params: Params) {
  const currentUuid = useSignal("");
  const state = useSignal<ReturnType<Fn> | null>(null);

  useSignalEffect(() => {
    const data = workerEvent.value;
    if (data && data.uuid === currentUuid.peek()) {
      state.value = data.value as ReturnType<Fn>;
    }
  });

  useDeepCompareEffect(() => {
    const uuid = uuidv4();
    currentUuid.value = uuid;

    // remove the root state passed in once
    // I can figure out how to not need it
    // to satisfy function parameters
    params.shift();
    worker.postMessage({
      type: "subscribe",
      uuid,
      selector: { selector: selector.name, params },
    });

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
