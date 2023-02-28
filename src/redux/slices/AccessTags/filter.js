import { createSlice } from "@reduxjs/toolkit";

export const sortByVariants = {
  createdAt: "Date",
  name: "Name",
};

export const orderVariants = {
  ASC: "Ascending",
  DESC: "Descending",
};

const initialState = {
  searchValue: "",
  order: { value: "ASC", label: "Ascending" }, // asc, desc
  sortBy: { value: "createdAt", label: "Date" }, // createdAt, name
  limit: 100,
  page: 1,
};

const accessTagsFiltersSlice = createSlice({
  name: "accessTagsFilters",
  initialState,
  reducers: {
    setAccessTagsSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setAccessTagsOrder: (state, action) => {
      state.order = {
        value: action.payload,
        label: orderVariants[action.payload],
      };
    },
    setAccessTagsSortBy: (state, action) => {
      state.sortBy = {
        value: action.payload,
        label: sortByVariants[action.payload],
      };
    },
    setAccessTagsLimit: (state, action) => {
      state.limit = action.payload;
    },
    setAccessTagsPage: (state, action) => {
      state.page = action.payload;
    },
    clearAccessTagsFilter: (state) => {
      state.searchValue = "";
      state.order = { value: "ASC", label: "Ascending" };
      state.sortBy = { value: "createdAt", label: "Date" };
      state.limit = 100;
      state.page = 1;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setAccessTagsSearchValue,
  setAccessTagsOrder,
  setAccessTagsSortBy,
  setAccessTagsLimit,
  setAccessTagsPage,
  clearAccessTagsFilter,
} = accessTagsFiltersSlice.actions;
export const accessTagsFilterReducer = accessTagsFiltersSlice.reducer;
export const selectAccessTagsFilters = (state) => state.accessTags.filter;
