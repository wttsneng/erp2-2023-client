import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "@src/core";
import qs from "qs";

export const fetchAccessTagsHistory = createAsyncThunk(
  "accessTagsHistory/fetchAccessTagsHistory",
  async (params, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const historyFilter = state.accessTags.fullHistoryFilter;
      const { searchValue, orderBy, id, sortBy, limit, page, field } =
        historyFilter;
      const query = qs.stringify({
        searchValue,
        order: orderBy.value,
        id,
        sortBy: sortBy.value,
        limit,
        field,
        page,
      });
      const { data } = await axios.get(
        `/api/accounts/access_tags/history?${query}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const initialState = {
  data: [],
  count: 0,
  status: "idle", // idle, loading, success, error
};

const accessTagsHistory = createSlice({
  name: "accessTagsHistory",
  initialState,
  reducers: {
    setAccessTagHistory: (state, action) => {
      state.data = action.payload.rows;
      state.count = action.payload.count;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessTagsHistory.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAccessTagsHistory.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.rows;
        state.count = action.payload.count;
      })
      .addCase(fetchAccessTagsHistory.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const { setAccessTagHistory } = accessTagsHistory.actions;
export const accessTagsHistoryReducer = accessTagsHistory.reducer;
export const selectAccessTagsHistoryData = (state) =>
  state.accessTags.history.data;
export const selectAccessTagsHistoryStatus = (state) =>
  state.accessTags.history.status;
