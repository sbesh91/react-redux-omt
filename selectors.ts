import { createSelector } from "@reduxjs/toolkit";
import createCachedSelector, { LruMapCache } from "re-reselect";
import { RootState, WorkerSelector } from "./types";

function cacheByValue<T>(_: RootState, val: T) {
  return "" + val || "";
}

function one(state: RootState) {
  return state.counterSliceReducer.counter;
}

function two(state: RootState, hello: string) {
  return `${hello} ${one(state) / 2}`;
}

const three = createSelector(
  (state: RootState) => state,
  (state) => {
    return state.counterSliceReducer.counter * 2;
  }
);

const four = createCachedSelector(
  (state: RootState) => state,
  (_: RootState, val: number) => val,
  (state: RootState) => three(state),
  (_, __, res) => {
    return res * 3;
  }
)({
  keySelector: cacheByValue,
  cacheObject: new LruMapCache({ cacheSize: 5 }),
});

function createWorkerSelector<T>(name: string, selector: T): WorkerSelector<T> {
  return {
    name,
    fn: selector,
  };
}

export const selectors = {
  one: createWorkerSelector("one", one),
  two: createWorkerSelector("two", two),
  three: createWorkerSelector("three", three),
  four: createWorkerSelector("four", four),
} as const;
