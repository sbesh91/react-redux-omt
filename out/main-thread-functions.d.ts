import { Signal } from "@preact/signals-react";
import { Action } from "redux";
import { FunctionParameters, SelectorFunction, WorkerSelector } from "./types";
declare function initializeWorkerStoreListener(w: Worker): void;
declare function dispatch(action: Action): void;
declare function useWorkerSelector<Fn extends SelectorFunction, Return extends ReturnType<Fn>>(selector: WorkerSelector<Fn>, params: FunctionParameters<Fn>, defaultValue: Return): Signal<Return>;
declare function useWorkerSelector<Fn extends SelectorFunction, Return extends ReturnType<Fn>>(selector: WorkerSelector<Fn>, params: FunctionParameters<Fn>, defaultValue?: Return): Signal<Return | undefined>;
declare function useWorkerSelector<Fn extends SelectorFunction, Return extends ReturnType<Fn>>(selector: WorkerSelector<Fn>, params?: FunctionParameters<Fn>, defaultValue?: Return): Signal<Return | undefined>;
export { useWorkerSelector, initializeWorkerStoreListener, dispatch };
