import React from "react";
import {useEffect} from "react";
import {render} from "react-dom";
import {decrement, increment} from "./actions";
import {selectors} from "./selectors";
import {
  dispatch,
  initializeWorkerStoreListener,
  useWorkerSelector,
} from "../src";

const worker = new Worker(new URL("store.ts", import.meta.url), {
  type: "module",
});
initializeWorkerStoreListener(worker);

function run() {
  render(<CounterDemo/>, document.getElementById("root"));
}

const CounterDemo = () => {
  const one = useWorkerSelector(selectors.one);
  const two = useWorkerSelector(selectors.two, {
    params: ["hello"],
    defaultValue: "",
  });
  const three = useWorkerSelector(selectors.three, {
    params: [1],
  });
  const four = useWorkerSelector(selectors.four, {
    params: [one.value ?? 0],
  });
  const five = useWorkerSelector(selectors.five, {
    params: [2, 4, "world"],
    defaultValue: "initial rendered value",
  });
  const test = useWorkerSelector(selectors.test, {
    params: [1, 2]
  })

  console.log(test.value);

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
      <p>A modification of that value is: {two.value}</p>
      <p>What about a different modification: {three.value}</p>
      <p>Here's yet another different modification: {four.value}</p>
      <p>{five.value}</p>
      <p>Deeply nested and parameterized {test.value}</p>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
    </div>
  );
};

run();
