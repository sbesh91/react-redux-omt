import { expose } from "comlink";
import { enablePatches, produceWithPatches } from "immer";
import { Action, createStore, Store } from "redux";

enablePatches();

let init: Store = {};

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

const reduce = produceWithPatches((draft: Store, action: Action) => {
  const key = uuidv4();

  switch (action.type) {
    case "INCREMENT":
      draft[key] = {
        value: `${key}-increment`,
      };
      break;
    case "DECREMENT":
      draft[key] = {
        value: `${key}-decrement`,
      };
      break;
  }
});

const reducer = (state = init, action: Action) => {
  const [next, nextPatches] = reduce(state, action);

  return next;
};

const store = createStore(reducer);

export interface WorkerStore {
  dispatch: Store["dispatch"];
  subscribe: (selector: Selector, uuid: string) => void;
  unsubscribe: (uuid: string) => void;
}

const listeners = new Map<string, Selector>();

expose({
  dispatch: store.dispatch,
  subscribe: (selector: Selector, uuid: string) => {
    listeners.set(uuid, selector);
    runSelector(selector, uuid);
  },
  unsubscribe: (uuid: string) => {
    listeners.delete(uuid);
  },
});

store.subscribe(() => {
  listeners.forEach(runSelector);
});

function runSelector(value: Selector, key: string) {
  let returnValue;
  switch (value.selector) {
    case "one":
      returnValue = one();
      break;
    case "two":
      returnValue = two(value.params);
      break;
  }

  if (returnValue !== undefined) {
    postMessage({
      uuid: key,
      value: returnValue,
    });
  }
}

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

function one() {
  return Object.entries(store.getState()).length;
}

function two(params: { hello: string }) {
  return `${params.hello} ${one() / 2}`;
}
