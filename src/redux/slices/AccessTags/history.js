import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "@src/core";
import qs from "qs";

export const fetchHistory = createAsyncThunk(
  "accessTags/history/fetchHistory",
  async (params, thunkAPI) => {
    const { getState } = thunkAPI;
    const state = getState();
    const historyFilter = state.accessTags.historyFilter;
    const { searchValue, order, id, sortBy, limit, page, field } =
      historyFilter;
    const query = qs.stringify({
      searchValue,
      order,
      id,
      sortBy,
      limit,
      field,
      page,
    });
    const { data } = await axios.get(
      `/api/accounts/access_tags/history?${query}`
    );
    return data;
  }
);
const initialState = {
  data: [],
  count: 0,
  status: "idle", // idle, loading, success, error
};

const historySlice = createSlice({
  name: "accessTags/history",
  initialState,
  reducers: {
    setAccessTagHistory: (state, action) => {
      state.data = action.payload.rows;
      state.count = action.payload.count;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistory.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.rows;
        state.count = action.payload.count;
      })
      .addCase(fetchHistory.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const { setTagHistory } = historySlice.actions;
export const historyReducer = historySlice.reducer;
export const selectHistoryData = (state) => state.accessTags.history.data;
export const selectHistoryStatus = (state) =>
  state.accessTags.tagsHistory.status;
