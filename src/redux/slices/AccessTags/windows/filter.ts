import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessTagsState } from "@src/redux/slices/AccessTags/@types";

interface IInitialState {
  open: boolean;
}

const initialState: IInitialState = {
  open: false,
};

const AccessTagsWindowsFilter = createSlice({
  name: "accessTags/windows/filter",
  initialState,
  reducers: {
    setAccessTagsWindowsFilterOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { setAccessTagsWindowsFilterOpen } =
  AccessTagsWindowsFilter.actions;
export const AccessTagsFilterWindowReducer = AccessTagsWindowsFilter.reducer;
export const selectAccessTagsFilterWindowIsOpen = (state: AccessTagsState) =>
  state.accessTags.windows.filter.open;
