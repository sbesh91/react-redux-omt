import { createSelector } from "@reduxjs/toolkit";
import createCachedSelector, { LruMapCache } from "re-reselect";
import { StoreState } from "./types";

function cacheByValue<T>(_: StoreState, val: T) {
  return "" + val || "";
}

function one(state: StoreState) {
  return state.counter;
}

function two(state: StoreState, hello: string) {
  return `${hello} ${one(state) / 2}`;
}

const three = createSelector(
  (state: StoreState) => state,
  (state) => {
    return state.counter * 2;
  }
);

const four = createCachedSelector(
  (state: StoreState) => state,
  (_, val: number) => val,
  (state: StoreState) => three(state),
  (_, __, res) => {
    return res * 3;
  }
)({
  keySelector: cacheByValue,
  cacheObject: new LruMapCache({ cacheSize: 5 }),
});

export const selectors = {
  one,
  two,
  three,
  four,
} as const;
