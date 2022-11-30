import React, { useEffect } from "react";
import { render } from "react-dom";
import { ActionTypes } from "./types";
import { StoreProvider, useDispatch, useWorkerStore } from "./use-store";

const worker = new Worker("./basic-worker.ts", { type: "module" });

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
  const one = useWorkerStore<number>({ selector: "one" });
  const two = useWorkerStore<number>({
    selector: "two",
    params: {
      hello: "world",
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: ActionTypes.increment });
    }, 1);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Welcome</h1>
      <p>The current counter is: {one}</p>
      <p>A modification of that value is: {two}</p>
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
