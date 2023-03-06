import { configureStore } from "@reduxjs/toolkit";
import type { Reducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  authReducer,
  sidebarReducer,
  contextMenuReducer,
  alertReducer,
} from "./slices/Basic";
import { errorThunkMiddleware } from "./middlewares/errorThunkMiddleware";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { AccessTagState } from "@src/redux/slices/AccessTags/initAccessTagsRedux";

export interface IStore extends ToolkitStore {
  asyncReducers?: any;
}

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
export function injectAsyncReducer(
  store: IStore,
  name: string,
  asyncReducer: Reducer
) {
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
}

export default function configureAppStore() {
  const store: IStore = configureStore({
    reducer: createReducer(),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(errorThunkMiddleware),
  });
  store.asyncReducers = {};

  return store;
}
export type RootState = {
  auth: ReturnType<typeof authReducer>;
  sidebar: ReturnType<typeof sidebarReducer>;
  contextMenu: ReturnType<typeof contextMenuReducer>;
  alert: ReturnType<typeof alertReducer>;
  accessTags: AccessTagState;
};
export type AppStore = ReturnType<typeof configureAppStore>;
export type AppDispatch = AppStore["dispatch"];
