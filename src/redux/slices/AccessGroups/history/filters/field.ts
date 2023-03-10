import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessGroupsState } from "@src/redux/slices/AccessGroups/@types";

interface IInitialState {
  field: "name" | "description";
}

const initialState: IInitialState = {
  field: "name",
};

const accessGroupsHistoryFiltersFieldSlice = createSlice({
  name: "accessGroups/history/filters/field",
  initialState,
  reducers: {
    setAccessGroupsHistoryFiltersFieldField: (
      state,
      action: PayloadAction<typeof initialState.field>
    ) => {
      state.field = action.payload;
    },
    clearAccessGroupsHistoryFiltersField: (state) => {
      state.field = "name";
    },
  },
  extraReducers: () => {},
});
export const {
  setAccessGroupsHistoryFiltersFieldField,
  clearAccessGroupsHistoryFiltersField,
} = accessGroupsHistoryFiltersFieldSlice.actions;
export const accessGroupsHistoryFiltersFieldReducer =
  accessGroupsHistoryFiltersFieldSlice.reducer;
export const selectAccessGroupsHistoryFiltersField = (
  state: AccessGroupsState
) => state.accessGroups.history.filters.field;
