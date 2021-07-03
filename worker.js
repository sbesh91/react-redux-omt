import { createStore } from "redux";

import { expose } from "comlink";

const reducer = (state = { total: 0 }, { type }) => {
  switch (type) {
    case "INCREMENT":
      return {
        total: state.total + 1,
      };
    case "DECREMENT":
      return {
        total: state.total - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
expose(store);
