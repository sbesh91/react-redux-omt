import toolkit from "@reduxjs/toolkit";
import redux from "redux";
import { RootState } from "./types";
import { counterSliceReducer, counterStoreState } from "./actions";
import { initializeWorkerStore } from "../src/worker-functions";
import { selectors } from "./selectors";
const { configureStore } = toolkit;
const { combineReducers } = redux;

const rootReducer = combineReducers({
  counterSliceReducer,
});

const init: RootState = {
  counterSliceReducer: counterStoreState,
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: init,
});

initializeWorkerStore(store, selectors);
