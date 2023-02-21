import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  count: 0,
  status: "idle", // idle, loading, success, error
};

const AccessTagsHistorySlice = createSlice({
  name: "accessTagsHistory",
  initialState,
  reducers: {
    setAccessTagHistory: (state, action) => {
      state.data = action.payload.rows;
      state.count = action.payload.count;
    },
  },
  extraReducers: (builder) => {},
});

export const { setTagHistory } = AccessTagsHistorySlice.actions;
export const AccessTagsHistoryReducer = AccessTagsHistorySlice.reducer;
export const selectAccessTagsHistoryData = (state) =>
  state.accessTagsHistory.data;
export const selectAccessTagsHistoryStatus = (state) =>
  state.tagsHistory.status;
