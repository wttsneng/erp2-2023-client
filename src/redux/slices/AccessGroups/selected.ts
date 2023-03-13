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

function isDeleteEnabled(selected: Array<IAccessGroups>) {
  return selected.length > 0 && selected.every((item) => !item.deletedAt);
}
function isRestoreEnabled(selected: Array<IAccessGroups>) {
  return selected.length > 0 && selected.every((item) => item.deletedAt);
}

const accessGroupsSelectedSlice = createSlice({
  name: "accessGroups/selected",
  initialState,
  reducers: {
    setAccessGroupsSelected(
      state,
      action: PayloadAction<Array<IAccessGroups>>
    ) {
      state.selected = action.payload;
      state.deleteEnabled = isDeleteEnabled(state.selected);
      state.restoreEnabled = isRestoreEnabled(state.selected);
    },
    pushAccessGroupsSelectedItem(state, action: PayloadAction<IAccessGroups>) {
      state.selected = [];
      state.selected.push(action.payload);
      state.deleteEnabled = isDeleteEnabled(state.selected);
      state.restoreEnabled = isRestoreEnabled(state.selected);
    },
    unshiftAccessGroupsSelected(state, action: PayloadAction<IAccessGroups>) {
      state.selected.unshift(action.payload);
      state.deleteEnabled = isDeleteEnabled(state.selected);
      state.restoreEnabled = isRestoreEnabled(state.selected);
    },
    updateAccessGroupsSelectedItem(state, action) {
      const index = state.selected.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selected[index] = action.payload;
      state.deleteEnabled = isDeleteEnabled(state.selected);
      state.restoreEnabled = isRestoreEnabled(state.selected);
    },
    deleteAccessGroupsSelectedItem(state, action) {
      const index = state.selected.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selected.splice(index, 1);
      state.deleteEnabled = isDeleteEnabled(state.selected);
      state.restoreEnabled = isRestoreEnabled(state.selected);
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
