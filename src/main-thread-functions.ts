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
  Fn extends SelectorFunction<Parameters<Fn>[0], ReturnType<Fn>>,
  Params extends FunctionParameters<Fn>,
  Return extends ReturnType<Fn>,
  RequiredParams extends [Params[0]] extends [undefined]
    ? {}
    : { params: Params },
  Options extends { defaultValue?: Return } & RequiredParams
>(selector: WorkerSelector<Fn>, options: Options): Signal<Return>;

function useWorkerSelector<
  Fn extends SelectorFunction<Parameters<Fn>[0], ReturnType<Fn>>,
  Params extends FunctionParameters<Fn>,
  Return extends ReturnType<Fn>,
  RequiredParams extends [Params[0]] extends [undefined]
    ? {}
    : { params: Params },
  Options extends { defaultValue?: Return } & RequiredParams
>(selector: WorkerSelector<Fn>, options?: Options): Signal<Return | undefined>;

function useWorkerSelector<
  Fn extends SelectorFunction<Parameters<Fn>[0], ReturnType<Fn>>,
  Return extends ReturnType<Fn>,
  Params extends FunctionParameters<Fn>,
  RequiredParams extends [Params[0]] extends [undefined]
    ? {}
    : { params: Params },
  Options extends { defaultValue?: Return } & RequiredParams
>(selector: WorkerSelector<Fn>, options?: Options): Signal<Return | undefined> {
  const defaultValue = options?.defaultValue;
  const params = options && "params" in options ? options.params : [];
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

export {
  workerEvent,
  useWorkerSelector,
  initializeWorkerStoreListener,
  dispatch,
};
