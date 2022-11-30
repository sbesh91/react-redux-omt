import { Action } from "@reduxjs/toolkit";

export const enum ActionTypes {
  increment = "INCREMENT",
  decrement = "DECREMENT",
}

export type MessageType =
  | {
      type: "dispatch";
      action: Action<ActionTypes>;
    }
  | { type: "subscribe"; selector: Selector; uuid: string }
  | { type: "unsubscribe"; uuid: string };

export type Selector =
  | { selector: "one" }
  | {
      selector: "two";
      params: { hello: string };
    };

export type SelectorReturn = {
  uuid: string;
  value: unknown;
};
