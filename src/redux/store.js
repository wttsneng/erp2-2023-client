import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { accountReducer } from "./slices/accountSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      account: accountReducer,
    },
  });
export const store = makeStore();
