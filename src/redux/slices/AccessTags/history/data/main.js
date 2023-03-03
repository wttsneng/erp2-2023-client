import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "@src/core";
import qs from "qs";

export const fetchAccessTagsHistoryDataMain = createAsyncThunk(
  "accessTags/history/data/main/fetchAccessTagsHistoryDataMain",
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

const accessTagsHistoryDataMainSlice = createSlice({
  name: "accessTags/history/data/main",
  initialState,
  reducers: {
    setAccessTagHistoryDataMain: (state, action) => {
      state.data = action.payload.rows;
      state.count = action.payload.count;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessTagsHistoryDataMain.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAccessTagsHistoryDataMain.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.rows;
        state.count = action.payload.count;
      })
      .addCase(fetchAccessTagsHistoryDataMain.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const { setAccessTagHistoryDataMain } =
  accessTagsHistoryDataMainSlice.actions;
export const accessTagsHistoryDataMainReducer =
  accessTagsHistoryDataMainSlice.reducer;
export const selectAccessTagsHistoryDataMain = (state) =>
  state.accessTags.history.data;
export const selectAccessTagsHistoryDataMainStatus = (state) =>
  state.accessTags.history.status;
