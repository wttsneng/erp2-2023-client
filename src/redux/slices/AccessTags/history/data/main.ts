import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { axios } from "@src/core";
import qs from "qs";
import {
  IAccessTagsHistory,
  AccessTagsState,
} from "@src/redux/slices/AccessTags/@types";

export const fetchAccessTagsHistoryDataMain = createAsyncThunk(
  "accessTags/history/data/main/fetchAccessTagsHistoryDataMain",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as AccessTagsState;
      const historyFilter = state.accessTags.history.filters.main;
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
      const { data } = await axios.get<{
        rows: IAccessTagsHistory[];
        count: number;
      }>(`/api/accounts/access_tags/history?${query}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

interface IInitialState {
  data: IAccessTagsHistory[];
  count: number;
  status: "idle" | "loading" | "success" | "error";
}
const initialState: IInitialState = {
  data: [],
  count: 0,
  status: "idle", // idle, loading, success, error
};

const accessTagsHistoryDataMainSlice = createSlice({
  name: "accessTags/history/data/main",
  initialState,
  reducers: {
    setAccessTagHistoryDataMain: (
      state,
      action: PayloadAction<{
        rows: IAccessTagsHistory[];
        count: number;
      }>
    ) => {
      state.data = action.payload.rows;
      state.count = action.payload.count;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessTagsHistoryDataMain.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAccessTagsHistoryDataMain.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.rows;
        state.count = action.payload.count;
      })
      .addCase(fetchAccessTagsHistoryDataMain.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { setAccessTagHistoryDataMain } =
  accessTagsHistoryDataMainSlice.actions;
export const accessTagsHistoryDataMainReducer =
  accessTagsHistoryDataMainSlice.reducer;
export const selectAccessTagsHistoryDataMain = (state: AccessTagsState) =>
  state.accessTags.history.data.main.data;
export const selectAccessTagsHistoryDataMainStatus = (state: AccessTagsState) =>
  state.accessTags.history.data.main.status;
