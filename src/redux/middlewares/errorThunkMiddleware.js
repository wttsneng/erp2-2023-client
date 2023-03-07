import { isRejectedWithValue } from "@reduxjs/toolkit";
import {
  setAlertOpen,
  setAlertData,
  setAlertType,
} from "@src/redux/slices/Basic/alertSlice";

export const errorThunkMiddleware = (store) => (next) => (action) => {
  if (!isRejectedWithValue(action)) {
    return next(action);
  }
  const { payload } = action;
  const { message } = payload || null;
  if (message) {
    store.dispatch(setAlertOpen(true));
    store.dispatch(setAlertData(message));
    store.dispatch(setAlertType("error"));
  }
  return next(action);
};
