import { createSlice } from "@reduxjs/toolkit";
import { setData, addTag, updateTag, deleteTag, fetchTags } from "./data";

const initialState = {
  selected: [],
  current: [],
  mode: "single", //single, multiOne, multiMany
};
const tableSlice = createSlice({
  name: "accessTags/table",
  initialState,
  reducers: {
    setSelectedTag(state, action) {
      state.selected = action.payload;
    },
    multiAddRemoveSelectedTag(state, action) {
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
    setTableMode(state, action) {
      state.mode = action.payload;
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
        state.current = state.current.map((accessTag) =>
          accessTag.id === action.payload.id ? action.payload : accessTag
        );
      })
      .addCase(deleteTag, (state, action) => {
        state.current = state.current.filter(
          (accessTag) => accessTag.id !== action.payload.id
        );
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.current = action.payload.rows;
      });
  },
});

export const { multiAddRemoveSelectedTag, setTableMode, setSelectedTag } =
  tableSlice.actions;
export const tableReducer = tableSlice.reducer;
export const selectTableSelected = (state) => state.accessTags.table.selected;
