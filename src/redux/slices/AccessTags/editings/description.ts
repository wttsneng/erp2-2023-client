import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessTagsState } from "../@types";

interface IInitialState {
  saveBlocked: boolean;
}
const initialState: IInitialState = {
  saveBlocked: false,
};

const accessTagsEditingsDescriptionSlice = createSlice({
  name: "accessTags/editings/Description",
  initialState,
  reducers: {
    setAccessTagsEditingsDescriptionSaveBlocked(
      state,
      action: PayloadAction<boolean>
    ) {
      state.saveBlocked = action.payload;
    },
  },
  extraReducers: () => {},
});
export const { setAccessTagsEditingsDescriptionSaveBlocked } =
  accessTagsEditingsDescriptionSlice.actions;
export const accessTagsEditingsDescriptionReducer =
  accessTagsEditingsDescriptionSlice.reducer;
export const selectAccessTagsEditingsDescriptionSaveBlocked = (
  state: AccessTagsState
) => state.accessTags.editings.description.saveBlocked;
