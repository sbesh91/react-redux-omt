import React from "react";
import { useEffect } from "react";
import { render } from "react-dom";
import { decrement, increment } from "./actions";
import { selectors } from "./selectors";
import { dispatch, useWorkerSelector } from "./use-store";

function run() {
  render(<CounterDemo />, document.getElementById("root"));
}

const CounterDemo = () => {
  const one = useWorkerSelector(selectors.one);
  const two = useWorkerSelector(selectors.two, "hello");
  const three = useWorkerSelector(selectors.three);
  const four = useWorkerSelector(selectors.four, one.value ?? 0);
  const five = useWorkerSelector(selectors.five, 2, 4, 'world');

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
      <p>{five}</p>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
    </div>
  );
};

run();
