import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  field: null,
};

const accessTagsHistoryFiltersFieldSlice = createSlice({
  name: "accessTags/history/filters/field",
  initialState,
  reducers: {
    setAccessTagsHistoryFiltersFieldField: (state, action) => {
      state.field = action.payload;
    },
  },
  extraReducers: (builder) => {},
});
export const { setAccessTagsHistoryFiltersFieldField } =
  accessTagsHistoryFiltersFieldSlice.actions;
export const accessTagsHistoryFiltersFieldReducer =
  accessTagsHistoryFiltersFieldSlice.reducer;
export const selectAccessTagsHistoryFiltersField = (state) =>
  state.accessTags.history.filters.field;
