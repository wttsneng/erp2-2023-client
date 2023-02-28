import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios, socket } from "@src/core";
import qs from "qs";

export const fetchAccessTags = createAsyncThunk(
  "accessTags/fetchAccessTags",
  async ({ quickSearchValue, order, sortBy, limit, page }) => {
    const queryParams = qs.stringify({
      quickSearchValue: quickSearchValue,
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
export const changeAccessTagValue = ({ itemId, attribute, value }) => {
  socket.emit("changeAccessTagsValue", { itemId, attribute, value });
};

export const createAccessTag = ({ name, description }) => {
  socket.emit("createAccessTag", { name, description });
};
export const deleteAccessTag = (id) => {
  socket.emit("deleteAccessTag", id);
};

const initialState = {
  data: [],
  count: 0,
  totalPages: 0,
  status: "idle", // idle, loading, success, error
};
const accessTagsDataSlice = createSlice({
  name: "accessTagsData",
  initialState,
  reducers: {
    setAccessTagsData: (state, action) => {
      state.status = "loading";
      state.data = action.payload.rows;
      state.count = action.payload.count;
      state.totalPages = action.payload.totalPages;
      state.status = "success";
    },
    addAccessTags: (state, action) => {
      state.status = "loading";
      state.data.push(action.payload);
      state.count++;
      state.status = "success";
    },
    updateAccessTags: (state, action) => {
      state.status = "loading";
      const index = state.data.findIndex((tag) => tag.id === action.payload.id);
      state.data[index] = action.payload;
      state.status = "success";
    },
    deleteAccessTags: (state, action) => {
      state.status = "loading";
      const index = state.data.findIndex((tag) => tag.id === action.payload.id);
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

export const {
  setAccessTagsData,
  addAccessTags,
  updateAccessTags,
  deleteAccessTags,
} = accessTagsDataSlice.actions;
export const accessTagsDataReducer = accessTagsDataSlice.reducer;
export const selectAccessTagsData = (state) => state.accessTags.data.data;
export const selectAccessTagsStatus = (state) => state.accessTags.data.status;
