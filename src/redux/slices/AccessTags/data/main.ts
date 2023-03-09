import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "@src/core";
import qs from "qs";
import {
  IAccessTags,
  AccessTagsState,
} from "@src/redux/slices/AccessTags/@types";
import { AccessTagsFiltersMainState } from "../filters/main";

export const fetchAccessTagsDataMain = createAsyncThunk(
  "accessTags/data/main/fetchAccessTagsDataMain",
  async (
    {
      searchValue,
      name,
      description,
      includeMode,
      order,
      sortBy,
      limit,
      page,
    }: AccessTagsFiltersMainState,
    { rejectWithValue }
  ) => {
    try {
      const queryParams = qs.stringify({
        searchValue,
        name,
        description,
        includeMode,
        order: order.value,
        sortBy: sortBy.value,
        limit,
        page,
      });
      const response = await axios.get(
        `/api/accounts/access_tags?${queryParams}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

interface IInitialState {
  data: IAccessTags[];
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
const accessTagsDataMainSlice = createSlice({
  name: "accessTags/data/main",
  initialState,
  reducers: {
    setAccessTagsDataMain: (state, action) => {
      state.status = "loading";
      state.data = action.payload.rows;
      state.count = action.payload.count;
      state.totalPages = action.payload.totalPages;
      state.status = "success";
    },
    addAccessTagsDataMainItem: (state, action) => {
      state.status = "loading";
      state.data.push(action.payload);
      state.count++;
      state.status = "success";
    },
    updateAccessTagsDataMainItem: (state, action) => {
      state.status = "loading";
      const index = state.data.findIndex((tag) => tag.id === action.payload.id);
      state.data[index] = action.payload;
      state.status = "success";
    },
    deleteAccessTagsDataMainItem: (state, action) => {
      state.status = "loading";
      const index = state.data.findIndex((tag) => tag.id === action.payload.id);
      state.data.splice(index, 1);
      state.count--;
      state.status = "success";
    },
    updateAccessTagsDataMainEditingItems: (state, action) => {
      state.status = "loading";
      state.editingItems = action.payload;
      state.status = "success";
    },
    clearAccessTagsDataMain: (state) => {
      state.status = "loading";
      state.editingItems = initialState.editingItems;
      state.status = "success";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessTagsDataMain.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAccessTagsDataMain.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.rows;
        state.count = action.payload.count;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchAccessTagsDataMain.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const {
  setAccessTagsDataMain,
  addAccessTagsDataMainItem,
  updateAccessTagsDataMainItem,
  clearAccessTagsDataMain,
} = accessTagsDataMainSlice.actions;
export const accessTagsDataMainReducer = accessTagsDataMainSlice.reducer;
export const selectAccessTagsDataMainData = (state: AccessTagsState) =>
  state.accessTags.data.main.data;
export const selectAccessTagsDataMainStatus = (state: AccessTagsState) =>
  state.accessTags.data.main.status;
