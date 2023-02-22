import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../core";
import qs from "qs";
export const fetchAccessTags = createAsyncThunk(
  "accessTags/fetchAccessTags",
  async ({ searchValue, order, sortBy, limit, page }) => {
    const queryParams = qs.stringify({
      query: searchValue,
      order: order.value,
      sortBy: sortBy.value,
      limit,
      page,
    });
    const response = await axios.get(
      `/api/accounts/access_tags?${queryParams}`
    );
    return response.data;
  }
);
const initialState = {
  data: [],
  count: 0,
  totalPages: 0,
  status: "idle", // idle, loading, success, error
};
const accessTagsSlice = createSlice({
  name: "accessTags",
  initialState,
  reducers: {
    setAccessTags: (state, action) => {
      state.status = "loading";
      state.data = action.payload.rows;
      state.count = action.payload.count;
      state.totalPages = action.payload.totalPages;
      state.status = "success";
    },
    addAccessTag: (state, action) => {
      state.status = "loading";
      state.data.push(action.payload);
      state.count++;
      state.status = "success";
    },
    updateAccessTag: (state, action) => {
      state.status = "loading";
      const index = state.data.findIndex(
        (accessTag) => accessTag.id === action.payload.id
      );
      state.data[index] = action.payload;
      state.status = "success";
    },
    deleteAccessTag: (state, action) => {
      state.status = "loading";
      const index = state.data.findIndex(
        (accessTag) => accessTag.id === action.payload.id
      );
      state.data.splice(index, 1);
      state.count--;
      state.status = "success";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessTags.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAccessTags.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.rows;
        state.count = action.payload.count;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchAccessTags.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const { setAccessTags, addAccessTag, updateAccessTag, deleteAccessTag } =
  accessTagsSlice.actions;
export const AccessTagsReducer = accessTagsSlice.reducer;
export const selectAccessTags = (state) => state.accessTags.data;
export const selectAccessTagStatus = (state) => state.accessTags.status;
