import React, { useEffect } from "react";
import { render } from "react-dom";
import { decrement, increment } from "./actions";
import { dispatch, useWorkerStore } from "./use-store";

function run() {
  render(<CounterDemo />, document.getElementById("root"));
}

const CounterDemo = () => {
  const one = useWorkerStore<number>("one");
  const two = useWorkerStore<number>("two", "hello");
  const three = useWorkerStore<number>("three");
  const four = useWorkerStore<number>("four", one.value);

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
