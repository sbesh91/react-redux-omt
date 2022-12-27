import { Signal } from "@preact/signals-react";
import { Action } from "redux";
import { FunctionParameters, SelectorFunction, SelectorReturn, WorkerSelector } from "./types";
declare const workerEvent: Signal<SelectorReturn<unknown> | null>;
declare function initializeWorkerStoreListener(w: Worker): void;
declare function dispatch(action: Action): void;
declare function useWorkerSelector<Fn extends SelectorFunction<Parameters<Fn>[0], ReturnType<Fn>>, Params extends FunctionParameters<Fn>, Return extends ReturnType<Fn>, RequiredParams extends [Params[0]] extends [undefined] ? {} : {
    params: Params;
}, Options extends {
    defaultValue?: Return;
} & RequiredParams>(selector: WorkerSelector<Fn>, options: Options): Signal<Return>;
declare function useWorkerSelector<Fn extends SelectorFunction<Parameters<Fn>[0], ReturnType<Fn>>, Params extends FunctionParameters<Fn>, Return extends ReturnType<Fn>, RequiredParams extends [Params[0]] extends [undefined] ? {} : {
    params: Params;
}, Options extends {
    defaultValue?: Return;
} & RequiredParams>(selector: WorkerSelector<Fn>, options?: Options): Signal<Return | undefined>;
export { workerEvent, useWorkerSelector, initializeWorkerStoreListener, dispatch, };
