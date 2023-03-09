import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAccessTags, AccessTagsState } from "./@types";

interface IAccessTagsSelectedInitialState {
  selected: Array<IAccessTags>;
  mode: "single" | "multiOne" | "multiMany";
  deleteEnabled: boolean;
  restoreEnabled: boolean;
}

const initialState: IAccessTagsSelectedInitialState = {
  selected: [],
  mode: "single", // single, multiOne, multiMany
  deleteEnabled: false,
  restoreEnabled: false,
};

const accessTagsSelectedSlice = createSlice({
  name: "accessTags/selected",
  initialState,
  reducers: {
    setAccessTagsSelected(state, action: PayloadAction<Array<IAccessTags>>) {
      state.selected = action.payload;
    },
    setAccessTagsSingleSelected(state, action: PayloadAction<IAccessTags>) {
      state.selected = [];
      state.selected.push(action.payload);
    },
    unshiftAccessTagsSelected(state, action: PayloadAction<IAccessTags>) {
      state.selected.unshift(action.payload);
    },
    dinamicallySetAccessTagsSelected(
      state,
      action: PayloadAction<{ obj: IAccessTags; current: Array<IAccessTags> }>
    ) {
      const { obj, current } = action.payload;
      if (state.mode === "single") {
        state.selected = [];
        state.selected.push(obj);
      }
      if (state.mode === "multiOne") {
        if (state.selected.some((item) => item.id === obj.id)) {
          state.selected = state.selected.filter((item) => item.id !== obj.id);
        } else {
          state.selected.push(obj);
        }
      }
      if (state.mode === "multiMany") {
        if (state.selected.length === 0) {
          state.selected.push(obj);
        }
        if (!state.selected[state.selected.length - 1]) return;
        const lastSelectedId = state.selected[state.selected.length - 1]?.id;
        if (!lastSelectedId) return;
        const currentLastSelectedIndex = current.findIndex(
          (item) => item.id === lastSelectedId
        );
        const currentSelectedIndex = current.findIndex(
          (item) => item.id === obj.id
        );
        if (currentSelectedIndex > currentLastSelectedIndex) {
          state.selected = current.slice(
            currentLastSelectedIndex,
            currentSelectedIndex + 1
          );
        } else {
          state.selected = current.slice(
            currentSelectedIndex,
            currentLastSelectedIndex + 1
          );
        }
      }
      state.deleteEnabled =
        state.selected.length > 0 &&
        state.selected.every((item) => !item.deletedAt);
      state.restoreEnabled =
        state.selected.length > 0 &&
        state.selected.every((item) => item.deletedAt);
    },
    setAccessTagsSelectedMode(state, action) {
      state.mode = action.payload;
    },
    updateAccessTagsSelectedItem(state, action) {
      const index = state.selected.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selected[index] = action.payload;
    },
    deleteAccessTagsSelectedItem(state, action) {
      const index = state.selected.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selected.splice(index, 1);
    },
    clearAccessTagsSelected(state) {
      state.selected = [];
      state.mode = "single";
    },
  },
  extraReducers: () => {},
});
export const {
  setAccessTagsSelected,
  dinamicallySetAccessTagsSelected,
  setAccessTagsSelectedMode,
  unshiftAccessTagsSelected,
  setAccessTagsSingleSelected,
  clearAccessTagsSelected,
} = accessTagsSelectedSlice.actions;
export const accessTagsSelectedReducer = accessTagsSelectedSlice.reducer;
export const selectAccessTagsSelected = (state: AccessTagsState) =>
  state.accessTags.selected.selected;
