import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessTagsState } from "../@types";

interface IInitialState {
  deleteOpen: boolean;
}

const initialState: IInitialState = {
  deleteOpen: false,
};

const accessTagsWindowsWarningsSlice = createSlice({
  name: "AccessTagsWarnings",
  initialState,
  reducers: {
    setAccessTagsWindowsWarningsDeleteOpen: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.deleteOpen = action.payload;
    },
  },
  extraReducers: () => {},
});
export const { setAccessTagsWindowsWarningsDeleteOpen } =
  accessTagsWindowsWarningsSlice.actions;
export const accessTagsWindowsWarningsReducer =
  accessTagsWindowsWarningsSlice.reducer;
export const selectAccessTagsWindowsWarningsDeleteOpen = (
  state: AccessTagsState
) => state.accessTags.windows.warnings.deleteOpen;
