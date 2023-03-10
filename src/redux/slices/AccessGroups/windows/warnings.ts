import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessGroupsState } from "../@types";

interface IInitialState {
  deleteOpen: boolean;
}

const initialState: IInitialState = {
  deleteOpen: false,
};

const accessGroupsWindowsWarningsSlice = createSlice({
  name: "AccessGroupsWarnings",
  initialState,
  reducers: {
    setAccessGroupsWindowsWarningsDeleteOpen: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.deleteOpen = action.payload;
    },
  },
  extraReducers: () => {},
});
export const { setAccessGroupsWindowsWarningsDeleteOpen } =
  accessGroupsWindowsWarningsSlice.actions;
export const accessGroupsWindowsWarningsReducer =
  accessGroupsWindowsWarningsSlice.reducer;
export const selectAccessGroupsWindowsWarningsDeleteOpen = (
  state: AccessGroupsState
) => state.accessGroups.windows.warnings.deleteOpen;
