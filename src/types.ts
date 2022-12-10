import { Action } from "@reduxjs/toolkit";

export type MessageType =
  | {
      type: "dispatch";
      action: Action;
    }
  | { type: "subscribe"; selector: SelectorReference; uuid: string }
  | { type: "unsubscribe"; uuid: string };

export type SelectorReference = {
  selector: string;
  params: ReadonlyArray<unknown>;
};

export type SelectorReturn<T> = {
  uuid: string;
  value: T;
};

export type SelectorFunction<T = unknown, K = unknown> = (
  state: T,
  ...params: any[]
) => K;

export interface WorkerSelector<T> {
  name: string;
  fn: T;
}

export type FunctionParameters<T extends SelectorFunction> =
  | [Parameters<T>[1]]
  | [Parameters<T>[1], Parameters<T>[2]]
  | [Parameters<T>[1], Parameters<T>[2], Parameters<T>[3]]
  | [Parameters<T>[1], Parameters<T>[2], Parameters<T>[3], Parameters<T>[4]]
  | [
      Parameters<T>[1],
      Parameters<T>[2],
      Parameters<T>[3],
      Parameters<T>[4],
      Parameters<T>[5]
    ];
