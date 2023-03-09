import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessTagsState } from "../@types";

interface AccessTagsToolsAddButtonState {
  clickHappened: boolean;
}

const initialState: AccessTagsToolsAddButtonState = {
  clickHappened: false,
};

const accessTagsToolsAddButtonSlice = createSlice({
  name: "accessTags/tools/addButton",
  initialState,
  reducers: {
    setAccessTagsToolsAddButtonClickHappened(
      state,
      action: PayloadAction<boolean>
    ) {
      state.clickHappened = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { setAccessTagsToolsAddButtonClickHappened } =
  accessTagsToolsAddButtonSlice.actions;

export const accessTagsToolsAddButtonReducer =
  accessTagsToolsAddButtonSlice.reducer;
export const selectAccessTagsToolsAddButtonClickHappened = (
  state: AccessTagsState
) => state.accessTags.tools.addButton.clickHappened;
