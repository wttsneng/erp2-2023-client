import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: [],
  mode: "single", // single, multiOne, multiMany
  deleteEnabled: false,
  restoreEnabled: false,
};

const accessTagsSelectedSlice = createSlice({
  name: "accessTags/selected",
  initialState,
  reducers: {
    setAccessTagsSelected(state, action) {
      state.selected = action.payload;
    },
    dinamicallySetAccessTagsSelected(state, action) {
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
        const lastSelectedId = state.selected[state.selected.length - 1].id;
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
  },
  extraReducers: (builder) => {},
});
export const {
  setAccessTagsSelected,
  dinamicallySetAccessTagsSelected,
  setAccessTagsSelectedMode,
} = accessTagsSelectedSlice.actions;
export const accessTagsSelectedReducer = accessTagsSelectedSlice.reducer;
export const selectAccessTagsSelected = (state) =>
  state.accessTags.selected.selected;
