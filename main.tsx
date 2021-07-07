import React, { useEffect } from "react";
import { render } from "react-dom";

import { Provider, useDispatch, useSelector } from "react-redux";

import { wrap } from "comlink";

import remoteStoreWrapper from "./remote-store-wrapper.js";

const remoteStore = wrap(new Worker("./worker.ts", { type: "module" }));

async function run() {
  const store = await remoteStoreWrapper(remoteStore);

  render(
    <Provider store={store}>
      <CounterDemo />
    </Provider>,
    document.getElementById("root")
  );
}

const CounterDemo = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state) as any;

  useEffect(() => {
    // const interval = setInterval(() => {
    //   dispatch({ type: "INCREMENT" });
    // }, 8);
    // return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Welcome</h1>
      <p>The current counter is: {Object.entries(store).length}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};

run();
