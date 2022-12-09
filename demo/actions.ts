import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import produce from "immer";
import { CounterSliceState } from "../src/types";

export let counterStoreState: CounterSliceState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: counterStoreState,
  reducers: {
    increment: produce(
      (draft: CounterSliceState, action: PayloadAction<number>) => {
        draft.counter += action.payload;
      }
    ),
    decrement: produce(
      (draft: CounterSliceState, action: PayloadAction<number>) => {
        draft.counter -= action.payload;
      }
    ),
  },
});

export const { increment, decrement } = counterSlice.actions;
export const counterSliceReducer = counterSlice.reducer;
