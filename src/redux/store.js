import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  authReducer,
  sidebarReducer,
  variablesReducer,
  contextMenuReducer,
} from "./slices/Basic";

const defaultReducers = {
  auth: authReducer,
  sidebar: sidebarReducer,
  variables: variablesReducer,
  contextMenu: contextMenuReducer,
};
function createReducer(asyncReducers) {
  return combineReducers({
    ...defaultReducers,
    ...asyncReducers,
  });
}
export function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
}

export default function configureAppStore() {
  const store = configureStore({
    reducer: createReducer(),
  });
  store.asyncReducers = {};
  return store;
}
