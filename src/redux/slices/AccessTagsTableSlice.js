import { createSlice } from "@reduxjs/toolkit";
import {
  setAccessTags,
  addAccessTag,
  updateAccessTag,
  deleteAccessTag,
} from "./AccessTagsSlice";

const initialState = {
  selected: [],
  currentAccessTags: [],
  mode: "single", //single, multiOne, multiMany
};
const accessTagsTableSlice = createSlice({
  name: "accessTagsTable",
  initialState,
  reducers: {
    setSelectedAccessTag(state, action) {
      state.selected = action.payload;
    },
    multiAddRemoveSelectedAccessTag(state, action) {
      if (state.mode === "single") {
        state.selected = [];
        state.selected.push(action.payload);
      }

      if (state.mode === "multiOne") {
        if (state.selected.includes(action.payload)) {
          state.selected = state.selected.filter(
            (item) => item !== action.payload
          );
        } else {
          state.selected.push(action.payload);
        }
      }
      if (state.mode === "multiMany") {
        if (state.selected.length === 0) {
          state.selected.push(action.payload);
        }
        const lastSelectedId = state.selected[state.selected.length - 1];
        const currentSelectedId = action.payload;
        const indexOfLastSelectedId = state.currentAccessTags.findIndex(
          (item) => item.id === lastSelectedId
        );
        const indexOfCurrentSelectedId = state.currentAccessTags.findIndex(
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
        const candidates = state.currentAccessTags.slice(
          sliceStart,
          sliceEnd + 1
        );
        candidates.forEach((item) => state.selected.push(item.id));
      }
    },
    setAccessTagsTableMode(state, action) {
      state.mode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setAccessTags, (state, action) => {
        state.currentAccessTags = action.payload.rows;
      })
      .addCase(addAccessTag, (state, action) => {
        state.currentAccessTags.push(action.payload);
      })
      .addCase(updateAccessTag, (state, action) => {
        state.currentAccessTags = state.currentAccessTags.map((accessTag) =>
          accessTag.id === action.payload.id ? action.payload : accessTag
        );
      })
      .addCase(deleteAccessTag, (state, action) => {
        state.currentAccessTags = state.currentAccessTags.filter(
          (accessTag) => accessTag.id !== action.payload.id
        );
      });
  },
});

export const { multiAddRemoveSelectedAccessTag, setAccessTagsTableMode } =
  accessTagsTableSlice.actions;
export const AccessTagsTableReducer = accessTagsTableSlice.reducer;
export const selectAccessTagsTableSelected = (state) =>
  state.accessTagsTable.selected;
