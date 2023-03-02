import { createSlice } from "@reduxjs/toolkit";
import {
  setAccessTagsData,
  addAccessTags,
  updateAccessTags,
  deleteAccessTags,
  fetchAccessTags,
} from "./data";
import { setSelectionMode } from "@src/redux/slices/Basic/variableSlice";

const initialState = {
  selected: [],
  current: [],
  selectionMode: "single",
  deleteEnabled: false,
  restoreEnabled: false,
};
const accessTagsTableSlice = createSlice({
  name: "accessTagsTable",
  initialState,
  reducers: {
    setAccessTagsSelectedTag(state, action) {
      state.selected = action.payload;
    },
    multiAddRemoveAccessTagsSelectedTag(state, action) {
      if (state.selectionMode === "single") {
        state.selected = [];
        state.selected.push(action.payload);
      }
      if (state.selectionMode === "multiOne") {
        if (state.selected.some((item) => item.id === action.payload.id)) {
          state.selected = state.selected.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          state.selected.push(action.payload);
        }
      }
      if (state.selectionMode === "multiMany") {
        if (state.selected.length === 0) {
          state.selected.push(action.payload);
        }
        const lastSelectedId = state.selected[state.selected.length - 1].id;
        const currentSelectedId = action.payload.id;
        const indexOfLastSelectedId = state.current.findIndex(
          (item) => item.id === lastSelectedId
        );
        const indexOfCurrentSelectedId = state.current.findIndex(
          (item) => item.id === currentSelectedId
        );
        const sliceStart = Math.min(
          indexOfLastSelectedId,
          indexOfCurrentSelectedId
        );
        const sliceEnd = Math.max(
          indexOfLastSelectedId,
          indexOfCurrentSelectedId
        );
        const candidates = state.current.slice(sliceStart, sliceEnd + 1);
        candidates.forEach((item) => state.selected.push(item));
      }
      state.deleteEnabled =
        state.selected.length > 0 &&
        state.selected.every((item) => !item.deletedAt);
      state.restoreEnabled =
        state.selected.length > 0 &&
        state.selected.every((item) => item.deletedAt);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setAccessTagsData, (state, action) => {
        state.current = action.payload.rows;
      })
      .addCase(addAccessTags, (state, action) => {
        state.current.push(action.payload);
      })
      .addCase(updateAccessTags, (state, action) => {
        state.current = state.current.map((accessTag) =>
          accessTag.id === action.payload.id ? action.payload : accessTag
        );
      })
      .addCase(deleteAccessTags, (state, action) => {
        state.current = state.current.filter(
          (accessTag) => accessTag.id !== action.payload.id
        );
      })
      .addCase(fetchAccessTags.fulfilled, (state, action) => {
        state.current = action.payload.rows;
      })
      .addCase(setSelectionMode, (state, action) => {
        state.selectionMode = action.payload;
      });
  },
});

export const { multiAddRemoveAccessTagsSelectedTag, setAccessTagsSelectedTag } =
  accessTagsTableSlice.actions;
export const accessTagsTableReducer = accessTagsTableSlice.reducer;
export const selectAccessTagsTableSelected = (state) =>
  state.accessTags.table.selected;
