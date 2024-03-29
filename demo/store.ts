import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { RootState } from "./types";
import { initializeWorkerStore } from "../src";
import { counterSliceReducer, counterStoreState } from "./actions";
import { selectors } from "./selectors";

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
