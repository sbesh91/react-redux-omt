import { Action } from "@reduxjs/toolkit";
import { selectors } from "./selectors";

export const enum ActionTypes {
  increment = "INCREMENT",
  decrement = "DECREMENT",
}

export type MessageType =
  | { type: "init"; sab: SharedArrayBuffer }
  | {
      type: "dispatch";
      action: Action<ActionTypes>;
    }
  | { type: "subscribe"; selector: BaseSelector; uuid: string }
  | { type: "unsubscribe"; uuid: string };

export type BaseSelector = {
  selector: keyof typeof selectors;
  params: ReadonlyArray<unknown>;
};

export type SelectorReturn<T> = {
  uuid: string;
  value: T;
};

export interface StoreState {
  counter: number;
}
