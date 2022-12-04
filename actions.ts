import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import produce from "immer";
import { StoreState } from "./types";

export const counterReducer = (init: StoreState) =>
  createReducer(init, {
    increment: produce((draft: StoreState, action: PayloadAction) => {
      draft.counter += 1;
    }),
    decrement: produce((draft: StoreState, action: PayloadAction) => {
      draft.counter -= 1;
    }),
  });
