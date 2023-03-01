import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const AccessTagsFullHistoryWindowSlice = createSlice({
  name: "AccessTagsFullHistoryWindow",
  initialState,
  reducers: {
    setAccessTagsFullHistoryWindowIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setAccessTagsFullHistoryWindowIsOpen } =
  AccessTagsFullHistoryWindowSlice.actions;
export const accessTagsFullHistoryWindowReducer =
  AccessTagsFullHistoryWindowSlice.reducer;
export const selectAccessTagsFullHistoryWindowIsOpen = (state) =>
  state.accessTags.fullHistoryWindow.isOpen;
