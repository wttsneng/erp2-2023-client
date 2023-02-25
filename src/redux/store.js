import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { AccessTagsHistoryReducer } from "./slices/AccessTagsHistorySlice";
import { AccessTagsFilterReducer } from "./slices/AccessTagsFilterSlice";
import { AccessTagsReducer } from "./slices/AccessTagsSlice";
import { AccessTagsHistoryFilterReducer } from "./slices/AccessTagsHistoryFilterSlice";
import { AccessTagsInputReducer } from "./slices/AccessTagsInputSlice";
import { sidebarReducer } from "./slices/sidebarSlice";
import { AccessTagsTableReducer } from "./slices/AccessTagsTableSlice";
import { AccessTagsHistoryWindowReducer } from "./slices/AccessTagsHistoryWindowSlice";

export const allReducers = {
  auth: authReducer,
  accessTags: AccessTagsReducer,
  accessTagsHistory: AccessTagsHistoryReducer,
  accessTagsFilter: AccessTagsFilterReducer,
  accessTagsHistoryFilter: AccessTagsHistoryFilterReducer,
  accessTagsInput: AccessTagsInputReducer,
  accessTagsTable: AccessTagsTableReducer,
  sidebar: sidebarReducer,
  accessTagsHistoryWindow: AccessTagsHistoryWindowReducer,
};
export const rootReducer = combineReducers(allReducers);
const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });
export const store = makeStore();
