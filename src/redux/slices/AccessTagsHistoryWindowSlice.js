import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const AccessTagsHistoryWindow = createSlice({
  name: "accessTagsHistoryWindow",
  initialState,
  reducers: {
    setAccessTagsHistoryWindowOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setAccessTagsHistoryWindowOpen } =
  AccessTagsHistoryWindow.actions;
export const AccessTagsHistoryWindowReducer = AccessTagsHistoryWindow.reducer;
export const selectAccessTagsHistoryWindowIsOpen = (state) =>
  state.accessTagsHistoryWindow.isOpen;
