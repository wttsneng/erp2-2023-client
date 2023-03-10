import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "@src/core";
import qs from "qs";
import {
  AccessGroupsState,
  IAccessGroups,
} from "@src/redux/slices/AccessGroups/@types";

export const fetchAccessGroupsHistoryDataField = createAsyncThunk(
  "accessGroups/history/data/field/fetchAccessGroupsHistoryDataField",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState() as AccessGroupsState;

      const selectedTag = state.accessGroups.selected.selected[0];
      if (!selectedTag) return rejectWithValue({ message: "No selected tag" });
      const id = selectedTag.id;
      const fieldData = state.accessGroups.history.filters.field;
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
        `/api/accounts/access_groups/history?${query}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

interface IInitialState {
  data: IAccessGroups[];
  status: "idle" | "loading" | "success" | "error";
}

const initialState: IInitialState = {
  data: [],
  status: "idle",
};

const accessGroupsHistoryDataField = createSlice({
  name: "accessGroups/history/data/field",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessGroupsHistoryDataField.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAccessGroupsHistoryDataField.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.rows;
      })
      .addCase(fetchAccessGroupsHistoryDataField.rejected, (state) => {
        state.status = "error";
      });
  },
});
export const accessGroupsHistoryDataFieldReducer =
  accessGroupsHistoryDataField.reducer;
export const selectAccessGroupsHistoryDataFieldData = (
  state: AccessGroupsState
) => state.accessGroups.history.data.field.data;
export const selectAccessGroupsHistoryDataFieldStatus = (
  state: AccessGroupsState
) => state.accessGroups.history.data.field.status;
