import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  authReducer,
  sidebarReducer,
  contextMenuReducer,
  alertReducer,
} from "./slices/Basic";
import { errorThunkMiddleware } from "./middlewares/errorThunkMiddleware";

const defaultReducers = {
  auth: authReducer,
  sidebar: sidebarReducer,
  contextMenu: contextMenuReducer,
  alert: alertReducer,
};

function createReducer(asyncReducers) {
  return combineReducers({
    ...defaultReducers,
    ...asyncReducers,
  });
}
function setupStore() {
  const store = configureStore({
    reducer: createReducer(),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(errorThunkMiddleware),
  });
  store.asyncReducers = {};
  store.injectAsyncReducer = (name, asyncReducer) => {
    store.asyncReducers[name] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  return store;
}

const store = setupStore();
export default store;
