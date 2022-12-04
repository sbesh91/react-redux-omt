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
  counterSliceReducer: StoreState;
}>;

export type SelectorReturn<T> = {
  uuid: string;
  value: T;
};

export interface StoreState {
  counter: number;
}
