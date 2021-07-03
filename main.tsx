import React, { useEffect } from "react";
import { render } from "react-dom";

import { Provider, connect, useDispatch, useSelector } from "react-redux";

import { wrap } from "comlink";

import remoteStoreWrapper from "./remote-store-wrapper.js";

async function run() {
  const remoteStore = await wrap(new Worker("./worker.js"));
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
    const interval = setInterval(() => {
      dispatch({ type: "INCREMENT" });
    }, 8);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Welcome</h1>
      <p>The current counter is: {store.total}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};

run();
