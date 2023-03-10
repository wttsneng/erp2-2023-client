import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessGroupsState } from "@src/redux/slices/AccessGroups/@types";

interface IInitialState {
  open: boolean;
}

const initialState: IInitialState = {
  open: false,
};

const AccessGroupsWindowsFilter = createSlice({
  name: "accessGroups/windows/filter",
  initialState,
  reducers: {
    setAccessGroupsWindowsFilterOpen: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.open = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { setAccessGroupsWindowsFilterOpen } =
  AccessGroupsWindowsFilter.actions;
export const AccessGroupsFilterWindowReducer =
  AccessGroupsWindowsFilter.reducer;
export const selectAccessGroupsFilterWindowIsOpen = (
  state: AccessGroupsState
) => state.accessGroups.windows.filter.open;
