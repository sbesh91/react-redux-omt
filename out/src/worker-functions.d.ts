import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { SelectorFunction, WorkerSelector } from "./types";
declare function initializeWorkerStore<T>(store: ToolkitStore<T>, selectors: Record<string, WorkerSelector<SelectorFunction<T>>>): void;
declare function createWorkerSelector<T extends SelectorFunction<Parameters<T>[0]>>(name: string, selector: T): WorkerSelector<T>;
export { initializeWorkerStore, createWorkerSelector };
