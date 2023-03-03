import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deleteOpen: false,
};

const accessTagsWindowsWarningsSlice = createSlice({
  name: "AccessTagsWarnings",
  initialState,
  reducers: {
    setAccessTagsWindowsWarningsDeleteOpen: (state, action) => {
      state.deleteOpen = action.payload;
    },
  },
  extraReducers: (builder) => {},
});
export const { setAccessTagsWindowsWarningsDeleteOpen } =
  accessTagsWindowsWarningsSlice.actions;
export const accessTagsWindowsWarningsReducer =
  accessTagsWindowsWarningsSlice.reducer;
export const selectAccessTagsWindowsWarningsDeleteOpen = (state) =>
  state.accessTags.windows.warnings.deleteOpen;
