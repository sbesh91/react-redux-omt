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
  one,
  (state: RootState) => state,
  (res, state) => {
    return res + state.counterSliceReducer.counter * 2;
  }
);

const four = createCachedSelector(
  (state: RootState) => state,
  (_: RootState, val: number) => val,
  three,
  (_, val, res) => {
    return res * 3 - val;
  }
)({
  keySelector: cacheByValue,
  cacheObject: new LruMapCache({ cacheSize: 5 }),
});

function five(state: RootState, one: number, two: number, three: string) {
  return `${three}: ${state.counterSliceReducer.counter}, sum: ${one + two}`;
}

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
  five: createWorkerSelector("five", five),
} as const;
