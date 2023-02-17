import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { AccessTagsHistoryReducer } from "./slices/AccessTagsHistorySlice";
import { AccessTagsFilterReducer } from "./slices/AccessTagsFilterSlice";
import { AccessTagsReducer } from "./slices/AccessTagsSlice";
import { AccessTagsHistoryFilterReducer } from "./slices/AccessTagsHistoryFilterSlice";
import { AccessTagsInputReducer } from "./slices/AccessTagsInputSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  accessTags: AccessTagsReducer,
  accessTagsHistory: AccessTagsHistoryReducer,
  accessTagsFilter: AccessTagsFilterReducer,
  accessTagsHistoryFilter: AccessTagsHistoryFilterReducer,
  accessTagsInput: AccessTagsInputReducer,
});
const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });
export const store = makeStore();
