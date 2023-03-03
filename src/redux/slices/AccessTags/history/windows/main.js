import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  width: 0,
  height: 0,
};

const AccessTagsHistoryWindowsMain = createSlice({
  name: "accessTags/history/windows/main",
  initialState,
  reducers: {
    setAccessTagsHistoryWindowsMainOpen: (state, action) => {
      state.open = action.payload;
    },
    setAccessTagsHistoryWindowsMainWidth: (state, action) => {
      state.width = action.payload;
    },
    setAccessTagsHistoryWindowsMainHeight: (state, action) => {
      state.height = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setAccessTagsHistoryWindowsMainOpen,
  setAccessTagsHistoryWindowsMainWidth,
  setAccessTagsHistoryWindowsMainHeight,
} = AccessTagsHistoryWindowsMain.actions;
export const accessTagsHistoryWindowsMainReducer =
  AccessTagsHistoryWindowsMain.reducer;
export const selectAccessTagsHistoryWindowsMainOpen = (state) =>
  state.accessTags.history.windows.main.open;
export const selectAccessTagsHistoryWindowsMainWidth = (state) =>
  state.accessTags.history.windows.main.width;
