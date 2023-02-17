import { createSlice } from "@reduxjs/toolkit";
import { socket } from "../../core";

export const getAccessTagsHistory = ({}) => {
  socket.emit("getAccessTagHistory");
};

const initialState = {
  data: [],
  status: "idle", // idle, loading, success, error
};

const AccessTagsHistorySlice = createSlice({
  name: "AccessTagsHistory",
  initialState,
  reducers: {
    setAccessTagHistory: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setTagHistory } = AccessTagsHistorySlice.actions;
export const AccessTagsHistoryReducer = AccessTagsHistorySlice.reducer;
export const selectAccessTagsHistoryData = (state) => state.tagsHistory.data;
export const selectAccessTagsHistoryStatus = (state) =>
  state.tagsHistory.status;
