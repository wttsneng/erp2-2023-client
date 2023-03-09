import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "@src/core";
import qs from "qs";
import {
  AccessTagsState,
  IAccessTags,
} from "@src/redux/slices/AccessTags/@types";

export const fetchAccessTagsHistoryDataField = createAsyncThunk(
  "accessTags/history/data/field/fetchAccessTagsHistoryDataField",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState() as AccessTagsState;

      const selectedTag = state.accessTags.selected.selected[0];
      if (!selectedTag) return rejectWithValue({ message: "No selected tag" });
      const id = selectedTag.id;
      const fieldData = state.accessTags.history.filters.field;
      if (!fieldData) return rejectWithValue({ message: "No selected field" });
      const field = fieldData.field;

      const query = qs.stringify({
        searchValue: "",
        order: "DESC",
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

interface IInitialState {
  data: IAccessTags[];
  status: "idle" | "loading" | "success" | "error";
}

const initialState: IInitialState = {
  data: [],
  status: "idle",
};

const accessTagsHistoryDataField = createSlice({
  name: "accessTags/history/data/field",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessTagsHistoryDataField.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAccessTagsHistoryDataField.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.rows;
      })
      .addCase(fetchAccessTagsHistoryDataField.rejected, (state) => {
        state.status = "error";
      });
  },
});
export const accessTagsHistoryDataFieldReducer =
  accessTagsHistoryDataField.reducer;
export const selectAccessTagsHistoryDataFieldData = (state: AccessTagsState) =>
  state.accessTags.history.data.field.data;
export const selectAccessTagsHistoryDataFieldStatus = (
  state: AccessTagsState
) => state.accessTags.history.data.field.status;
