import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessTagsState } from "../@types";

interface IInitialState {
  saveBlocked: boolean;
}
const initialState: IInitialState = {
  saveBlocked: false,
};

const accessTagsEditingsNameSlice = createSlice({
  name: "accessTags/editings/name",
  initialState,
  reducers: {
    setAccessTagsEditingsNameSaveBlocked(
      state,
      action: PayloadAction<boolean>
    ) {
      state.saveBlocked = action.payload;
    },
  },
  extraReducers: () => {},
});
export const { setAccessTagsEditingsNameSaveBlocked } =
  accessTagsEditingsNameSlice.actions;
export const accessTagsEditingsNameReducer =
  accessTagsEditingsNameSlice.reducer;
export const selectAccessTagsEditingsNameSaveBlocked = (
  state: AccessTagsState
) => state.accessTags.editings.name.saveBlocked;
