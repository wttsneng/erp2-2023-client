import { createSlice } from "@reduxjs/toolkit";
import { socket } from "../../core";

export const getAccessTagsHistory = ({
  searchValue,
  order,
  id,
  sortBy,
  limit,
  withUserLogin,
  page,
}) => {
  socket.emit("getAccessTagsHistory", {
    query: searchValue,
    order,
    id,
    sortBy,
    limit,
    withUserLogin,
    page,
  });
};

const initialState = {
  searchValue: "",
  order: "ASC",
  id: null,
  sortBy: "createdAt", // createdAt, userLogin, new_value
  limit: 50,
  withUserLogin: "",
  page: 1,
};

const AccessTagsHistoryFilterSlice = createSlice({
  name: "accessTagsHistoryFilter",
  initialState,
  reducers: {
    setAccessTagsHistorySearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setAccessTagsHistoryOrder: (state, action) => {
      state.order = action.payload;
    },
    setAccessTagsHistorySortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setAccessTagsHistoryFields: (state, action) => {
      state.fields = action.payload;
    },
    setAccessTagsHistoryWithFields: (state, action) => {
      state.withFields = action.payload;
    },
    setAccessTagsHistoryWithUserLogin: (state, action) => {
      state.withUserLogin = action.payload;
    },
    setAccessTagsHistoryPage: (state, action) => {
      state.page = action.payload;
    },
    setTagHistoryId: (state, action) => {
      state.id = action.payload;
    },
    setTagHistoryLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setAccessTagsHistorySearchValue,
  setAccessTagsHistoryOrder,
  setAccessTagsHistorySortBy,
  setAccessTagsHistoryFields,
  setAccessTagsHistoryWithFields,
  setAccessTagsHistoryWithUserLogin,
  setAccessTagsHistoryPage,
  setTagHistoryId,
  setTagHistoryLimit,
} = AccessTagsHistoryFilterSlice.actions;
export const AccessTagsHistoryFilterReducer =
  AccessTagsHistoryFilterSlice.reducer;
export const selectAccessTagsHistoryFilterData = (state) =>
  state.accessTagsHistoryFilter;
