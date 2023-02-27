import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectionMode: "single", //single, multiOne, multiMany
};
const variablesSlice = createSlice({
  name: "variables",
  initialState,
  reducers: {
    setSelectionMode(state, action) {
      state.selectionMode = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setSelectionMode } = variablesSlice.actions;
export const variablesReducer = variablesSlice.reducer;
export const selectVariables = (state) => state.variables;
