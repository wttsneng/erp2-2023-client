import { createSlice } from "@reduxjs/toolkit";
import { setData, addTag, updateTag, deleteTag, fetchTags } from "./data";
import { setSelectionMode } from "@src/redux/slices/Basic/variableSlice";

const initialState = {
  selected: [],
  current: [],
  selectionMode: "single", //single, multiOne, multiMany
};
const tableSlice = createSlice({
  name: "accessGroups/table",
  initialState,
  reducers: {
    setSelectedTag(state, action) {
      state.selected = action.payload;
    },
    multiAddRemoveSelectedTag(state, action) {
      if (state.selectionMode === "single") {
        state.selected = [];
        state.selected.push(action.payload);
      }

      if (state.selectionMode === "multiOne") {
        if (state.selected.includes(action.payload)) {
          state.selected = state.selected.filter(
            (item) => item !== action.payload
          );
        } else {
          state.selected.push(action.payload);
        }
      }
      if (state.selectionMode === "multiMany") {
        if (state.selected.length === 0) {
          state.selected.push(action.payload);
        }
        const lastSelectedId = state.selected[state.selected.length - 1];
        const currentSelectedId = action.payload;
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
        candidates.forEach((item) => state.selected.push(item.id));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setData, (state, action) => {
        state.current = action.payload.rows;
      })
      .addCase(addTag, (state, action) => {
        state.current.push(action.payload);
      })
      .addCase(updateTag, (state, action) => {
        state.current = state.current.map((accessGroup) =>
          accessGroup.id === action.payload.id ? action.payload : accessGroup
        );
      })
      .addCase(deleteTag, (state, action) => {
        state.current = state.current.filter(
          (accessGroup) => accessGroup.id !== action.payload.id
        );
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.current = action.payload.rows;
      })
      .addCase(setSelectionMode, (state, action) => {
        state.selectionMode = action.payload;
      });
  },
});

export const { multiAddRemoveSelectedTag, setSelectedTag } = tableSlice.actions;
export const tableReducer = tableSlice.reducer;
export const selectTableSelected = (state) => state.accessGroups.table.selected;
