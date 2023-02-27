import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios, socket } from "@src/core";
import qs from "qs";

export const fetchTags = createAsyncThunk(
  "accessTags/data/fetchTags",
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
export const changeAccessTagValue = ({ itemId, attribute, value }) => {
  socket.emit("changeValue", { itemId, attribute, value });
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
const dataSlice = createSlice({
  name: "accessTags/data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.status = "loading";
      state.data = action.payload.rows;
      state.count = action.payload.count;
      state.totalPages = action.payload.totalPages;
      state.status = "success";
    },
    addTag: (state, action) => {
      state.status = "loading";
      state.data.push(action.payload);
      state.count++;
      state.status = "success";
    },
    updateTag: (state, action) => {
      state.status = "loading";
      const index = state.data.findIndex((tag) => tag.id === action.payload.id);
      state.data[index] = action.payload;
      state.status = "success";
    },
    deleteTag: (state, action) => {
      state.status = "loading";
      const index = state.data.findIndex((tag) => tag.id === action.payload.id);
      state.data.splice(index, 1);
      state.count--;
      state.status = "success";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.rows;
        state.count = action.payload.count;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const { setData, addTag, updateTag, deleteTag } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
export const selectData = (state) => state.accessTags.data.data;
export const selectDataStatus = (state) => state.accessTags.data.status;
