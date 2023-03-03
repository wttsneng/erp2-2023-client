import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saveBlocked: false,
};

const accessTagsEditingsDescriptionSlice = createSlice({
  name: "accessTags/editings/Description",
  initialState,
  reducers: {
    setAccessTagsEditingsDescriptionSaveBlocked(state, action) {
      state.saveBlocked = action.payload;
    },
  },
  extraReducers: (builder) => {},
});
export const { setAccessTagsEditingsDescriptionSaveBlocked } =
  accessTagsEditingsDescriptionSlice.actions;
export const accessTagsEditingsDescriptionReducer =
  accessTagsEditingsDescriptionSlice.reducer;
export const seletctAccessTagsEditingsDescriptionSaveBlocked = (state) =>
  state.accessTags.editings.description.saveBlocked;
