import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessTagsState } from "@src/redux/slices/AccessTags/@types";

interface IInitialState {
  field: "name" | "description";
}

const initialState: IInitialState = {
  field: "name",
};

const accessTagsHistoryFiltersFieldSlice = createSlice({
  name: "accessTags/history/filters/field",
  initialState,
  reducers: {
    setAccessTagsHistoryFiltersFieldField: (
      state,
      action: PayloadAction<typeof initialState.field>
    ) => {
      state.field = action.payload;
    },
    clearAccessTagsHistoryFiltersField: (state) => {
      state.field = "name";
    },
  },
  extraReducers: () => {},
});
export const {
  setAccessTagsHistoryFiltersFieldField,
  clearAccessTagsHistoryFiltersField,
} = accessTagsHistoryFiltersFieldSlice.actions;
export const accessTagsHistoryFiltersFieldReducer =
  accessTagsHistoryFiltersFieldSlice.reducer;
export const selectAccessTagsHistoryFiltersField = (state: AccessTagsState) =>
  state.accessTags.history.filters.field;
