import React from "react";
import { useEffect } from "react";
import { render } from "react-dom";
import { decrement, increment } from "./actions";
import { selectors } from "./selectors";
import { RootState } from "./types";
import { dispatch, useWorkerSelector } from "./use-store";

function run() {
  render(<CounterDemo />, document.getElementById("root"));
}

const init: RootState = {
  counterSliceReducer: {
    counter: 0,
  },
};

const CounterDemo = () => {
  const one = useWorkerSelector(selectors.one, init);
  const two = useWorkerSelector(selectors.two, init, "hello");
  const three = useWorkerSelector(selectors.three, init);
  const four = useWorkerSelector(selectors.four, init, one.value ?? 0);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   dispatch(increment(2));
    // }, 1);
    // return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Welcome</h1>
      <p>The current counter is: {one.value}</p>
      <p>A modification of that value is: {two}</p>
      <p>What about a different modification: {three}</p>
      <p>Here's yet another different modification: {four}</p>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
    </div>
  );
};

run();
