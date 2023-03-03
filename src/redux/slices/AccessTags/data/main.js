import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "@src/core";
import qs from "qs";

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
      field,
      page,
    },
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
        field,
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

const initialState = {
  data: [],
  count: 0,
  totalPages: 0,
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
    socketEmitAccessTagsDelete: (state, action) => {
      state.status = "loading";
      const index = state.data.findIndex((tag) => tag.id === action.payload.id);
      state.data.splice(index, 1);
      state.count--;
      state.status = "success";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessTagsDataMain.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAccessTagsDataMain.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.rows;
        state.count = action.payload.count;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchAccessTagsDataMain.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const {
  setAccessTagsDataMain,
  addAccessTagsDataMainItem,
  updateAccessTagsDataMainItem,
  socketEmitAccessTagsDelete,
} = accessTagsDataMainSlice.actions;
export const accessTagsDataMainReducer = accessTagsDataMainSlice.reducer;
export const selectAccessTagsDataMainData = (state) =>
  state.accessTags.data.main.data;
export const selectAccessTagsDataMainStatus = (state) =>
  state.accessTags.data.main.status;
