import { createSlice } from "@reduxjs/toolkit";
import { socket } from "../../core";

export const getAccessTags = ({ searchValue, order, sortBy, limit, page }) => {
  socket.emit("getAccessTags", {
    query: searchValue,
    order: order.value,
    sortBy: sortBy.value,
    limit,
    page,
  });
};
const initialState = {
  data: [],
  count: 0,
  status: "idle", // idle, loading, success, error
};
const accessTagsSlice = createSlice({
  name: "accessTags",
  initialState,
  reducers: {
    setAccessTags: (state, action) => {
      state.status = "loading";
      state.data = action.payload.rows;
      state.count = action.payload.count;
      state.status = "success";
    },
  },
  extraReducers: (builder) => {},
});

export const { setAccessTags } = accessTagsSlice.actions;
export const AccessTagsReducer = accessTagsSlice.reducer;
export const selectAccessTags = (state) => state.accessTags.data;
export const selectAccessTagStatus = (state) => state.accessTags.status;
