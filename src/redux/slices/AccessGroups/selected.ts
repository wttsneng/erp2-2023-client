import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAccessGroups, AccessGroupsState } from "./@types";

interface IAccessGroupsSelectedInitialState {
  selected: Array<IAccessGroups>;
  deleteEnabled: boolean;
  restoreEnabled: boolean;
}

const initialState: IAccessGroupsSelectedInitialState = {
  selected: [],
  deleteEnabled: false,
  restoreEnabled: false,
};

const accessGroupsSelectedSlice = createSlice({
  name: "accessGroups/selected",
  initialState,
  reducers: {
    setAccessGroupsSelected(
      state,
      action: PayloadAction<Array<IAccessGroups>>
    ) {
      state.selected = action.payload;
      state.deleteEnabled =
        state.selected.length > 0 &&
        state.selected.every((item) => !item.deletedAt);
      state.restoreEnabled =
        state.selected.length > 0 &&
        state.selected.every((item) => item.deletedAt);
    },
    pushAccessGroupsSelectedItem(state, action: PayloadAction<IAccessGroups>) {
      state.selected = [];
      state.selected.push(action.payload);
    },
    unshiftAccessGroupsSelected(state, action: PayloadAction<IAccessGroups>) {
      state.selected.unshift(action.payload);
    },
    updateAccessGroupsSelectedItem(state, action) {
      const index = state.selected.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selected[index] = action.payload;
    },
    deleteAccessGroupsSelectedItem(state, action) {
      const index = state.selected.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selected.splice(index, 1);
    },
    clearAccessGroupsSelected(state) {
      state.selected = [];
      state.deleteEnabled = false;
      state.restoreEnabled = false;
    },
  },
  extraReducers: () => {},
});
export const {
  setAccessGroupsSelected,
  unshiftAccessGroupsSelected,
  pushAccessGroupsSelectedItem,
  clearAccessGroupsSelected,
} = accessGroupsSelectedSlice.actions;
export const accessGroupsSelectedReducer = accessGroupsSelectedSlice.reducer;
export const selectAccessGroupsSelected = (state: AccessGroupsState) =>
  state.accessGroups.selected.selected;
