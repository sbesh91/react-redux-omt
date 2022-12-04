import { createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import produce from "immer";
import { StoreState } from "./types";

export let counterStoreState: StoreState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: counterStoreState,
  reducers: {
    increment: produce((draft: StoreState, action: PayloadAction<number>) => {
      draft.counter += action.payload;
    }),
    decrement: produce((draft: StoreState, action: PayloadAction<number>) => {
      draft.counter -= action.payload;
    }),
  },
});

export const { increment, decrement } = counterSlice.actions;
export const counterSliceReducer = counterSlice.reducer;
