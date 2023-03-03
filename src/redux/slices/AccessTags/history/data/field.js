import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "@src/core";
import qs from "qs";

export const fetchAccessTagsHistoryDataField = createAsyncThunk(
  "accessTags/history/data/field/fetchAccessTagsHistoryDataField",
  async (params, { rejectWithValue, getState }) => {
    try {
      const state = getState();

      const { id } = state.accessTags.selected.selected;
      const fieldData = state.accessTags.history.filters.field;
      const { field } = fieldData.field;

      const query = qs.stringify({
        searchValue: "",
        order: "ASC",
        id: id,
        sortBy: "createdAt",
        limit: 10,
        field: field,
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

const accessTagsHistoryDataField = createSlice({
  name: "accessTags/history/data/field",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessTagsHistoryDataField.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAccessTagsHistoryDataField.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.rows;
      })
      .addCase(fetchAccessTagsHistoryDataField.rejected, (state, action) => {
        state.status = "error";
      });
  },
});
export const accessTagsHistoryDataFieldReducer =
  accessTagsHistoryDataField.reducer;
export const selectAccessTagsHistoryDataFieldData = (state) =>
  state.accessTags.history.data.field.data;
export const selectAccessTagsHistoryDataFieldStatus = (state) =>
  state.accessTags.history.data.field.status;
