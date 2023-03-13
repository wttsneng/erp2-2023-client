import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "@src/core";
import qs from "qs";
import {
  IAccessGroups,
  AccessGroupsState,
} from "@src/redux/slices/AccessGroups/@types";

export const fetchAccessGroupsDataMain = createAsyncThunk(
  "accessGroups/data/main/fetchAccessGroupsDataMain",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState() as AccessGroupsState;
      const filters = state.accessGroups.filters.main;
      const {
        searchValue,
        name,
        description,
        includeMode,
        order,
        sortBy,
        limit,
        page,
      } = filters;
      const query = qs.stringify({
        searchValue,
        name,
        description,
        includeMode,
        order: order.value,
        sortBy: sortBy.value,
        limit,
        page,
      });
      const response = await axios.get<{
        rows: IAccessGroups[];
        count: number;
        totalPages: number;
      }>(`/api/accounts/access_groups?${query}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

interface IInitialState {
  data: IAccessGroups[];
  count: number;
  totalPages: number;
  editingItems: {
    name: number[];
    description: number[];
  };
  status: "idle" | "loading" | "success" | "error";
}

const initialState: IInitialState = {
  data: [],
  count: 0,
  totalPages: 0,
  editingItems: {
    name: [],
    description: [],
  },
  status: "idle", // idle, loading, success, error
};
const accessGroupsDataMainSlice = createSlice({
  name: "accessGroups/data/main",
  initialState,
  reducers: {
    setAccessGroupsDataMain: (state, action) => {
      state.status = "loading";
      state.data = action.payload.rows;
      state.count = action.payload.count;
      state.totalPages = action.payload.totalPages;
      state.status = "success";
    },
    addAccessGroupsDataMainItem: (state, action) => {
      state.status = "loading";
      state.data.push(action.payload);
      state.count++;
      state.status = "success";
    },
    updateAccessGroupsDataMainItem: (state, action) => {
      state.status = "loading";
      const index = state.data.findIndex((tag) => tag.id === action.payload.id);
      state.data[index] = action.payload;
      state.status = "success";
    },
    deleteAccessGroupsDataMainItem: (state, action) => {
      state.status = "loading";
      const index = state.data.findIndex((tag) => tag.id === action.payload.id);
      state.data.splice(index, 1);
      state.count--;
      state.status = "success";
    },
    updateAccessGroupsDataMainEditingItems: (state, action) => {
      state.status = "loading";
      state.editingItems = action.payload;
      state.status = "success";
    },
    clearAccessGroupsDataMain: (state) => {
      state.status = "loading";
      state.editingItems = initialState.editingItems;
      state.status = "success";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessGroupsDataMain.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAccessGroupsDataMain.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.rows;
        state.count = action.payload.count;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchAccessGroupsDataMain.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const {
  setAccessGroupsDataMain,
  addAccessGroupsDataMainItem,
  updateAccessGroupsDataMainItem,
  clearAccessGroupsDataMain,
} = accessGroupsDataMainSlice.actions;
export const accessGroupsDataMainReducer = accessGroupsDataMainSlice.reducer;
export const selectAccessGroupsDataMainData = (state: AccessGroupsState) =>
  state.accessGroups.data.main.data;
export const selectAccessGroupsDataMainStatus = (state: AccessGroupsState) =>
  state.accessGroups.data.main.status;
