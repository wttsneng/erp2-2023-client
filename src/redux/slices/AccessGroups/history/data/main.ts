import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { axios } from "@src/core";
import qs from "qs";
import {
  IAccessGroupsHistory,
  AccessGroupsState,
} from "@src/redux/slices/AccessGroups/@types";

export const fetchAccessGroupsHistoryDataMain = createAsyncThunk(
  "accessGroups/history/data/main/fetchAccessGroupsHistoryDataMain",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as AccessGroupsState;
      const historyFilter = state.accessGroups.history.filters.main;
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
        rows: IAccessGroupsHistory[];
        count: number;
      }>(`/api/accounts/access_groups/history?${query}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

interface IInitialState {
  data: IAccessGroupsHistory[];
  count: number;
  status: "idle" | "loading" | "success" | "error";
}
const initialState: IInitialState = {
  data: [],
  count: 0,
  status: "idle", // idle, loading, success, error
};

const accessGroupsHistoryDataMainSlice = createSlice({
  name: "accessGroups/history/data/main",
  initialState,
  reducers: {
    setAccessTagHistoryDataMain: (
      state,
      action: PayloadAction<{
        rows: IAccessGroupsHistory[];
        count: number;
      }>
    ) => {
      state.data = action.payload.rows;
      state.count = action.payload.count;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessGroupsHistoryDataMain.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAccessGroupsHistoryDataMain.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.rows;
        state.count = action.payload.count;
      })
      .addCase(fetchAccessGroupsHistoryDataMain.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { setAccessTagHistoryDataMain } =
  accessGroupsHistoryDataMainSlice.actions;
export const accessGroupsHistoryDataMainReducer =
  accessGroupsHistoryDataMainSlice.reducer;
export const selectAccessGroupsHistoryDataMain = (state: AccessGroupsState) =>
  state.accessGroups.history.data.main.data;
export const selectAccessGroupsHistoryDataMainStatus = (
  state: AccessGroupsState
) => state.accessGroups.history.data.main.status;
