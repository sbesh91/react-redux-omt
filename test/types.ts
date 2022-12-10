import { CombinedState } from "@reduxjs/toolkit";

export type RootState = CombinedState<{
  counterSliceReducer: CounterSliceState;
}>;
export interface CounterSliceState {
  counter: number;
}
