import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saveBlocked: false,
};

const accessTagsEditingsNameSlice = createSlice({
  name: "accessTags/editings/name",
  initialState,
  reducers: {
    setAccessTagsEditingsNameSaveBlocked(state, action) {
      state.saveBlocked = action.payload;
    },
  },
  extraReducers: (builder) => {},
});
export const { setAccessTagsEditingsNameSaveBlocked } =
  accessTagsEditingsNameSlice.actions;
export const accessTagsEditingsNameReducer =
  accessTagsEditingsNameSlice.reducer;
export const selectAccessTagsEditingsNameSaveBlocked = (state) =>
  state.accessTags.editings.name.saveBlocked;
