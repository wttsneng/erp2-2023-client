import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  mode: "mini",
};

const AccessTagsHistoryWindow = createSlice({
  name: "accessGroups/historyWindow",
  initialState,
  reducers: {
    setAccessTagsHistoryWindowOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setAccessTagsHistoryWindowMode: (state, action) => {
      state.mode = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setAccessTagsHistoryWindowOpen,
  setAccessTagsHistoryWindowMode,
} = AccessTagsHistoryWindow.actions;
export const accessTagsHistoryWindowReducer = AccessTagsHistoryWindow.reducer;
export const selectAccessTagsHistoryWindowIsOpen = (state) =>
  state.accessTags.historyWindow.isOpen;
