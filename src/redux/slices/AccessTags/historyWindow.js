import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const historyWindow = createSlice({
  name: "HistoryWindow",
  initialState,
  reducers: {
    setHistoryWindowOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setHistoryWindowOpen } = historyWindow.actions;
export const historyWindowReducer = historyWindow.reducer;
export const selectHistoryWindowIsOpen = (state) =>
  state.accessTags.historyWindow.isOpen;
