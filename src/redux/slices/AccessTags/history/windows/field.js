import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const accessTagsHistoryWindowsFieldSlice = createSlice({
  name: "accessTags/history/windows/field",
  initialState,
  reducers: {
    setAccessTagsHistoryWindowsFieldOpen: (state, action) => {
      state.open = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setAccessTagsHistoryWindowsFieldOpen } =
  accessTagsHistoryWindowsFieldSlice.actions;
export const accessTagsHistoryWindowsFieldReducer =
  accessTagsHistoryWindowsFieldSlice.reducer;
export const selectAccessTagsHistoryWindowsFieldOpen = (state) =>
  state.accessTags.history.windows.field.open;
