import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  mode: "mini",
};

const historyWindow = createSlice({
  name: "accessGroups/historyWindow",
  initialState,
  reducers: {
    setHistoryWindowOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setHistoryWindowMode: (state, action) => {
      state.mode = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setHistoryWindowOpen, setHistoryWindowMode } =
  historyWindow.actions;
export const historyWindowReducer = historyWindow.reducer;
export const selectHistoryWindowIsOpen = (state) =>
  state.accessGroups.historyWindow.isOpen;
