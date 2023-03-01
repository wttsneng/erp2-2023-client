import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const AccessTagMiniHistoryWindowSlice = createSlice({
  name: "AccessTagMiniHistoryWindow",
  initialState,
  reducers: {
    setAccessTagMiniHistoryWindowIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setAccessTagMiniHistoryWindowIsOpen } =
  AccessTagMiniHistoryWindowSlice.actions;
export const accessTagMiniHistoryWindowReducer =
  AccessTagMiniHistoryWindowSlice.reducer;
export const selectAccessTagMiniHistoryWindowIsOpen = (state) =>
  state.accessTags.miniHistoryWindow.isOpen;
