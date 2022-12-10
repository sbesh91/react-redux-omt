import toolkit from "@reduxjs/toolkit";
import redux from "redux";
import { RootState } from "./types";
import { counterSliceReducer, counterStoreState } from "./actions";
const { configureStore } = toolkit;
const { combineReducers } = redux;

const rootReducer = combineReducers({
  counterSliceReducer,
});

const init: RootState = {
  counterSliceReducer: counterStoreState,
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: init,
});
