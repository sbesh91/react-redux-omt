import { useSignalEffect } from "@preact/signals-react";
import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { ActionTypes } from "./types";
import {
  StoreProvider,
  useDispatch,
  useWorkerStore,
  worker,
} from "./use-store";

function run() {
  render(
    <StoreProvider.Provider value={{ worker }}>
      <CounterDemo />
    </StoreProvider.Provider>,
    document.getElementById("root")
  );
}

const CounterDemo = () => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState<number>(0);
  const one = useWorkerStore<number>("one");
  const two = useWorkerStore<number>("two", "hello");
  const three = useWorkerStore<number>("three");
  const four = useWorkerStore<number>("four", current);

  useSignalEffect(() => {
    setCurrent(one.value ?? 0);
  });

  useEffect(() => {
    // const interval = setInterval(() => {
    //   dispatch({ type: ActionTypes.increment });
    // }, 1);
    // return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Welcome</h1>
      <p>The current counter is: {one}</p>
      <p>A modification of that value is: {two}</p>
      <p>What about a different modification: {three}</p>
      <p>Here's yet another different modification: {four}</p>
      <button onClick={() => dispatch({ type: ActionTypes.increment })}>
        +
      </button>
      <button onClick={() => dispatch({ type: ActionTypes.decrement })}>
        -
      </button>
    </div>
  );
};

run();
