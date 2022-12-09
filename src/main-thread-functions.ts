import { Signal, useSignal, useSignalEffect } from "@preact/signals-react";
import { Action } from "redux";
import useDeepCompareEffect from "use-deep-compare-effect";
import {
  FunctionParameters,
  SelectorFunction,
  SelectorReturn,
  WorkerSelector,
} from "./types";

let worker: Worker | undefined;
const workerEvent = new Signal<SelectorReturn<unknown> | null>(null);

function initializeWorkerStoreListener(w: Worker) {
  worker = w;

  w.addEventListener(
    "message",
    ({ data }: MessageEvent<SelectorReturn<unknown>>) => {
      workerEvent.value = data;
    }
  );
}

function dispatch(action: Action) {
  worker?.postMessage({ type: "dispatch", action });
}

function useWorkerSelector<
  Fn extends SelectorFunction,
  Return extends ReturnType<Fn>
>(
  selector: WorkerSelector<Fn>,
  params: FunctionParameters<Fn>,
  defaultValue: Return
): Signal<Return>;

function useWorkerSelector<
  Fn extends SelectorFunction,
  Return extends ReturnType<Fn>
>(
  selector: WorkerSelector<Fn>,
  params: FunctionParameters<Fn>,
  defaultValue?: Return
): Signal<Return | undefined>;

function useWorkerSelector<
  Fn extends SelectorFunction,
  Return extends ReturnType<Fn>
>(
  selector: WorkerSelector<Fn>,
  params?: FunctionParameters<Fn>,
  defaultValue?: Return
): Signal<Return | undefined>;

function useWorkerSelector<
  Fn extends SelectorFunction,
  Return extends ReturnType<Fn>
>(
  selector: WorkerSelector<Fn>,
  params?: FunctionParameters<Fn>,
  defaultValue?: Return
): Signal<Return | undefined> {
  const currentUuid = useSignal("");
  const state = useSignal(defaultValue);

  useSignalEffect(() => {
    const data = workerEvent.value;
    if (data && data.uuid === currentUuid.peek()) {
      state.value = data.value as Return;
    }
  });

  useDeepCompareEffect(() => {
    const uuid = crypto.randomUUID();
    currentUuid.value = uuid;

    worker?.postMessage({
      type: "subscribe",
      uuid,
      selector: { selector: selector.name, params },
    });

    return () => {
      worker?.postMessage({ type: "unsubscribe", uuid });
    };
  }, [selector, params]);

  return state;
}

export { useWorkerSelector, initializeWorkerStoreListener, dispatch };
