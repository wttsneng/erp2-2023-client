import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deleteIsOpen: false,
};

const accessTagsWarningsSlice = createSlice({
  name: "AccessTagsWarnings",
  initialState,
  reducers: {
    setAccessTagsWarningsDeleteIsOpen: (state, action) => {
      state.deleteIsOpen = action.payload;
    },
  },
  extraReducers: (builder) => {},
});
export const { setAccessTagsWarningsDeleteIsOpen } =
  accessTagsWarningsSlice.actions;
export const accessTagsWarningsReducer = accessTagsWarningsSlice.reducer;
export const selectAccessTagsWarningsDeleteIsOpen = (state) =>
  state.accessTags.warnings.deleteIsOpen;
