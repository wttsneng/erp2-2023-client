import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { sidebarReducer } from "./slices/sidebarSlice";
import rootReducer, { extendReducer } from "redux-extendable-reducer";

export const defaultReducers = {
  auth: authReducer,
  sidebar: sidebarReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
store.dispatch(extendReducer(defaultReducers));
