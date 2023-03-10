import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessGroupsState } from "../@types";

interface IInitialState {
  saveBlocked: boolean;
}
const initialState: IInitialState = {
  saveBlocked: false,
};

const accessGroupsEditingsDescriptionSlice = createSlice({
  name: "accessGroups/editings/Description",
  initialState,
  reducers: {
    setAccessGroupsEditingsDescriptionSaveBlocked(
      state,
      action: PayloadAction<boolean>
    ) {
      state.saveBlocked = action.payload;
    },
  },
  extraReducers: () => {},
});
export const { setAccessGroupsEditingsDescriptionSaveBlocked } =
  accessGroupsEditingsDescriptionSlice.actions;
export const accessGroupsEditingsDescriptionReducer =
  accessGroupsEditingsDescriptionSlice.reducer;
export const selectAccessGroupsEditingsDescriptionSaveBlocked = (
  state: AccessGroupsState
) => state.accessGroups.editings.description.saveBlocked;
