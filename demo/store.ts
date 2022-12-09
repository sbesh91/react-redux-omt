import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { initializeWorkerStore } from "../src/worker-functions";
import { counterSliceReducer, counterStoreState } from "./actions";
import { selectors } from "./selectors";
import { RootState } from "../src/types";

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
