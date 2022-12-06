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

type FunctionParameters<T extends SelectorFunction> = Parameters<T>;

export function useWorkerSelector<
  Fn extends SelectorFunction,
>(selector: WorkerSelector<Fn>, ...params: FunctionParameters<Fn> | any[]) {
  const currentUuid = useSignal("");
  const state = useSignal<ReturnType<Fn> | null>(null);

  useSignalEffect(() => {
    const data = workerEvent.value;
    if (data && data.uuid === currentUuid.peek()) {
      state.value = data.value as ReturnType<Fn>;
    }
  });

  useDeepCompareEffect(() => {
    const uuid = crypto.randomUUID();
    currentUuid.value = uuid;

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
