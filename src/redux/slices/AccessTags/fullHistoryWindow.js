import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  width: 0,
  height: 0,
};

const AccessTagsFullHistoryWindowSlice = createSlice({
  name: "AccessTagsFullHistoryWindow",
  initialState,
  reducers: {
    setAccessTagsFullHistoryWindowIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setAccessTagsFullHistoryWindowWidth: (state, action) => {
      state.width = action.payload;
    },
    setAccessTagsFullHistoryWindowHeight: (state, action) => {
      state.height = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setAccessTagsFullHistoryWindowIsOpen,
  setAccessTagsFullHistoryWindowWidth,
  setAccessTagsFullHistoryWindowHeight,
} = AccessTagsFullHistoryWindowSlice.actions;
export const accessTagsFullHistoryWindowReducer =
  AccessTagsFullHistoryWindowSlice.reducer;
export const selectAccessTagsFullHistoryWindowIsOpen = (state) =>
  state.accessTags.fullHistoryWindow.isOpen;
export const selectAccessTagsFullHistoryWindowWidth = (state) =>
  state.accessTags.fullHistoryWindow.width;
