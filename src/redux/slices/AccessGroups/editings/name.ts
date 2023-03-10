import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessGroupsState } from "../@types";

interface IInitialState {
  saveBlocked: boolean;
}
const initialState: IInitialState = {
  saveBlocked: false,
};

const accessGroupsEditingsNameSlice = createSlice({
  name: "accessGroups/editings/name",
  initialState,
  reducers: {
    setAccessGroupsEditingsNameSaveBlocked(
      state,
      action: PayloadAction<boolean>
    ) {
      state.saveBlocked = action.payload;
    },
  },
  extraReducers: () => {},
});
export const { setAccessGroupsEditingsNameSaveBlocked } =
  accessGroupsEditingsNameSlice.actions;
export const accessGroupsEditingsNameReducer =
  accessGroupsEditingsNameSlice.reducer;
export const selectAccessGroupsEditingsNameSaveBlocked = (
  state: AccessGroupsState
) => state.accessGroups.editings.name.saveBlocked;
