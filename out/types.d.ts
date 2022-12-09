import { Action, CombinedState } from "@reduxjs/toolkit";
export type MessageType = {
    type: "dispatch";
    action: Action;
} | {
    type: "subscribe";
    selector: BaseSelector;
    uuid: string;
} | {
    type: "unsubscribe";
    uuid: string;
};
export type BaseSelector = {
    selector: string;
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
export type SelectorFunction<T = unknown> = (state: RootState, ...params: any[]) => T;
export interface WorkerSelector<T> {
    name: string;
    fn: T;
}
export type FunctionParameters<T extends SelectorFunction> = [Parameters<T>[1]] | [Parameters<T>[1], Parameters<T>[2]] | [Parameters<T>[1], Parameters<T>[2], Parameters<T>[3]] | [Parameters<T>[1], Parameters<T>[2], Parameters<T>[3], Parameters<T>[4]] | [
    Parameters<T>[1],
    Parameters<T>[2],
    Parameters<T>[3],
    Parameters<T>[4],
    Parameters<T>[5]
];
