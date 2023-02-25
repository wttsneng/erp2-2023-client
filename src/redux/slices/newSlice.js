import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  blyat: 1,
  status: "idle", // idle, loading, success, error
};
const newSlice = createSlice({
  name: "new",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const newReducer = newSlice.reducer;
