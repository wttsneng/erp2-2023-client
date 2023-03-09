import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, Reducer } from "redux";
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

function createReducer(asyncReducers?: Reducer) {
  return combineReducers({
    ...defaultReducers,
    ...asyncReducers,
  });
}
function setupStore() {
  const store = {
    ...configureStore({
      reducer: createReducer(),
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(errorThunkMiddleware),
    }),
    asyncReducers: {} as any,
    injectAsyncReducer: (name: string, asyncReducer: Reducer) => {
      store.asyncReducers[name] = asyncReducer;
      store.replaceReducer(createReducer(store.asyncReducers));
    },
  };
  return store;
}

const store = setupStore() as ReturnType<typeof setupStore>;

export type RootStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
