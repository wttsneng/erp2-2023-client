import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const AccessTagsFilterWindowSlice = createSlice({
  name: "accessTagsFilterWindow",
  initialState,
  reducers: {
    setAccessTagsFilterWindowIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setAccessTagsFilterWindowIsOpen } =
  AccessTagsFilterWindowSlice.actions;
export const AccessTagsFilterWindowReducer =
  AccessTagsFilterWindowSlice.reducer;
export const selectAccessTagsFilterWindowIsOpen = (state) =>
  state.accessTags.filterWindow.isOpen;
