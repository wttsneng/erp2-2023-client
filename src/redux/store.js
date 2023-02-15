import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { accountReducer } from "./slices/accountSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
});
const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });
export const store = makeStore();
