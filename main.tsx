import React, { useEffect, useState } from "react";
import { render } from "react-dom";

import { wrap } from "comlink";
import { Selector, SelectorReturn, WorkerStore } from "./basic-worker";
import { Signal, useSignal, useSignalEffect } from "@preact/signals-react";
const worker = new Worker("./basic-worker.ts", { type: "module" });
const remoteStore = wrap<WorkerStore>(worker);

function run() {
  render(<CounterDemo />, document.getElementById("root"));
}

const CounterDemo = () => {
  const one = useStore({ selector: "one" });
  const two = useStore({
    selector: "two",
    params: {
      hello: "world",
    },
  });

  useEffect(() => {
    // const interval = setInterval(() => {
    //   remoteStore.dispatch({ type: "INCREMENT" });
    // }, 8);
    // return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Welcome</h1>
      <p>The current counter is: {one}</p>
      <p>A modification of that value is: {two}</p>
      <button onClick={() => remoteStore.dispatch({ type: "INCREMENT" })}>
        +
      </button>
      <button onClick={() => remoteStore.dispatch({ type: "DECREMENT" })}>
        -
      </button>
    </div>
  );
};

const lastMessage = new Signal<SelectorReturn | null>(null);
worker.addEventListener("message", ({ data }) => {
  lastMessage.value = data;
});

function useStore<T>(selector: Selector) {
  const currentId = useSignal("");
  const [state, setState] = useState<T | null>(null);

  useSignalEffect(() => {
    const uuid = currentId.peek();
    const data = lastMessage.value;
    if (data?.uuid === uuid) {
      setState(data.value as T);
    }
  });

  useEffect(() => {
    const uuid = uuidv4();
    currentId.value = uuid;
    remoteStore.subscribe(selector, uuid);

    return () => {
      remoteStore.unsubscribe(uuid);
    };
  }, []);

  return state;
}

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

run();
