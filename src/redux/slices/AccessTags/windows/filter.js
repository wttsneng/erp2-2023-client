import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const AccessTagsWindowsFilter = createSlice({
  name: "accessTags/windows/filter",
  initialState,
  reducers: {
    setAccessTagsWindowsFilterOpen: (state, action) => {
      state.open = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setAccessTagsWindowsFilterOpen } =
  AccessTagsWindowsFilter.actions;
export const AccessTagsFilterWindowReducer = AccessTagsWindowsFilter.reducer;
export const selectAccessTagsFilterWindowIsOpen = (state) =>
  state.accessTags.windows.filter.open;
