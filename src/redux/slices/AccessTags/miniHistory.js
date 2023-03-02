import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "@src/core";
import qs from "qs";

export const fetchAccessTagsMiniHistory = createAsyncThunk(
  "accessTagsMiniHistory/fetchAccessTagsMiniHistory",
  async (params, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const { id, isNameFocused, isDescriptionFocused } =
        state.accessTags.input;
      const query = qs.stringify({
        searchValue: "",
        order: "ASC",
        id: id,
        sortBy: "createdAt",
        limit: 10,
        field: isNameFocused
          ? "name"
          : isDescriptionFocused
          ? "description"
          : "name",
        page: 1,
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
  status: "idle",
};

const accessTagsMiniHistory = createSlice({
  name: "accessTagsMiniHistory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessTagsMiniHistory.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAccessTagsMiniHistory.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.rows;
      })
      .addCase(fetchAccessTagsMiniHistory.rejected, (state, action) => {
        state.status = "error";
      });
  },
});
export const accessTagsMiniHistoryReducer = accessTagsMiniHistory.reducer;
export const selectAccessTagsMiniHistoryData = (state) =>
  state.accessTags.miniHistory.data;
export const selectAccessTagsMiniHistoryStatus = (state) =>
  state.accessTags.miniHistory.status;
