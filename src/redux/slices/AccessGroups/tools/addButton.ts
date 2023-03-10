import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessGroupsState } from "../@types";

interface AccessGroupsToolsAddButtonState {
  clickHappened: boolean;
}

const initialState: AccessGroupsToolsAddButtonState = {
  clickHappened: false,
};

const accessGroupsToolsAddButtonSlice = createSlice({
  name: "accessGroups/tools/addButton",
  initialState,
  reducers: {
    setAccessGroupsToolsAddButtonClickHappened(
      state,
      action: PayloadAction<boolean>
    ) {
      state.clickHappened = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { setAccessGroupsToolsAddButtonClickHappened } =
  accessGroupsToolsAddButtonSlice.actions;

export const accessGroupsToolsAddButtonReducer =
  accessGroupsToolsAddButtonSlice.reducer;
export const selectAccessGroupsToolsAddButtonClickHappened = (
  state: AccessGroupsState
) => state.accessGroups.tools.addButton.clickHappened;
