import { createSlice } from "@reduxjs/toolkit";

export const accessTagsFiltersMainSortByVariants = {
  createdAt: "Created date",
  updatedAt: "Updated date",
  deletedAt: "Deleted date",
  name: "Name",
  description: "Description",
};

export const accessTagsFiltersMainOrderByVariants = {
  ASC: "Ascending",
  DESC: "Descending",
};

const initialState = {
  searchValue: "",
  name: "",
  description: "",
  includeMode: 0, // -1 - deleted, 0 - active, 1 - all
  order: { value: "ASC", label: "Ascending" },
  sortBy: { value: "createdAt", label: "Date" },
  limit: 100,
  page: 1,
};

const accessTagsFiltersMainSlice = createSlice({
  name: "accessTagsFilters",
  initialState,
  reducers: {
    setAccessTagsFiltersMainSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setAccessTagsFiltersMainIncludeMode: (state, action) => {
      state.includeMode = action.payload;
    },
    setAccessTagsFiltersMainName: (state, action) => {
      state.name = action.payload;
    },
    setAccessTagsFiltersMainDescription: (state, action) => {
      state.description = action.payload;
    },
    setAccessTagsFiltersMainOrder: (state, action) => {
      state.order = {
        value: action.payload,
        label: accessTagsFiltersMainOrderByVariants[action.payload],
      };
    },
    setAccessTagsFiltersMainSortBy: (state, action) => {
      state.sortBy = {
        value: action.payload,
        label: accessTagsFiltersMainSortByVariants[action.payload],
      };
    },
    setAccessTagsFiltersMainLimit: (state, action) => {
      state.limit = action.payload;
    },
    setAccessTagsFiltersMainPage: (state, action) => {
      state.page = action.payload;
    },
    clearAccessTagsMainFilter: (state) => {
      state.quickSearchValue = "";
      state.name = "";
      state.description = "";
      state.includeMode = 0;
      state.order = { value: "ASC", label: "Ascending" };
      state.sortBy = { value: "createdAt", label: "Date" };
      state.limit = 100;
      state.page = 1;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setAccessTagsFiltersMainSearchValue,
  setAccessTagsFiltersMainName,
  setAccessTagsFiltersMainDescription,
  setAccessTagsFiltersMainIncludeMode,
  setAccessTagsFiltersMainSortBy,
  setAccessTagsFiltersMainLimit,
  setAccessTagsFiltersMainPage,
  clearAccessTagsMainFilter,
  setAccessTagsFiltersMainOrder,
} = accessTagsFiltersMainSlice.actions;
export const accessTagsFiltersMainReducer = accessTagsFiltersMainSlice.reducer;
export const selectAccessTagsFiltersMain = (state) =>
  state.accessTags.filters.main;
