import { Action, CombinedState } from "@reduxjs/toolkit";
import { selectors } from "./selectors";

export type MessageType =
  | {
      type: "dispatch";
      action: Action;
    }
  | { type: "subscribe"; selector: BaseSelector; uuid: string }
  | { type: "unsubscribe"; uuid: string };

export type BaseSelector = {
  selector: keyof typeof selectors;
  params: ReadonlyArray<unknown>;
};

export type RootState = CombinedState<{
  counterSliceReducer: CounterSliceState;
}>;

export type SelectorReturn<T> = {
  uuid: string;
  value: T;
};

export interface CounterSliceState {
  counter: number;
}

export type SelectorFunction<T = unknown> = (
  state: RootState,
  ...params: any[]
) => T;

export interface WorkerSelector<T> {
  name: string;
  fn: T;
}
