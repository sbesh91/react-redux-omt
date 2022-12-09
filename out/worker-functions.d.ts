import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { RootState, SelectorFunction, WorkerSelector } from "./types";
declare function initializeWorkerStore(store: ToolkitStore<RootState>, s: Record<string, WorkerSelector<SelectorFunction>>): void;
declare function createWorkerSelector<T>(name: string, selector: T): WorkerSelector<T>;
export { initializeWorkerStore, createWorkerSelector };
