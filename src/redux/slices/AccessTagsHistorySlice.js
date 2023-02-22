import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../core";
import qs from "qs";

export const fetchAccessTagsHistory = createAsyncThunk(
  "accessTagsHistory/fetchAccessTagsHistory",
  async (params, thunkAPI) => {
    const { getState } = thunkAPI;
    const state = getState();
    const { accessTagsHistoryFilter } = state;
    const { searchValue, order, id, sortBy, limit, page, field } =
      accessTagsHistoryFilter;
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
      `/api/accounts/access_tags_history?${query}`
    );
    return data;
  }
);
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

export const { setTagHistory } = AccessTagsHistorySlice.actions;
export const AccessTagsHistoryReducer = AccessTagsHistorySlice.reducer;
export const selectAccessTagsHistoryData = (state) =>
  state.accessTagsHistory.data;
export const selectAccessTagsHistoryStatus = (state) =>
  state.tagsHistory.status;
