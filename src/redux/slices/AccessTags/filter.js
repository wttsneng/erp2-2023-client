import { createSlice } from "@reduxjs/toolkit";

export const sortByVariants = {
  createdAt: "Created date",
  updatedAt: "Updated date",
  deletedAt: "Deleted date",
  name: "Name",
  description: "Description",
};

export const orderVariants = {
  ASC: "Ascending",
  DESC: "Descending",
};

export const eventVariants = {
  changed: "Changed",
  created: "Created",
  deleted: "Deleted",
};

const initialState = {
  quickSearchValue: "",
  name: "",
  description: "",
  includeMode: 0, // -1 - deleted, 0 - active, 1 - all
  order: { value: "ASC", label: "Ascending" }, // asc, desc
  sortBy: { value: "createdAt", label: "Date" }, // createdAt, name
  event: { value: "changed", label: "Change" },
  limit: 100,
  page: 1,
};

const accessTagsFiltersSlice = createSlice({
  name: "accessTagsFilters",
  initialState,
  reducers: {
    setAccessTagsFiltersQuickSearchValue: (state, action) => {
      state.quickSearchValue = action.payload;
    },
    setAccessTagsFiltersIncludeMode: (state, action) => {
      state.includeMode = action.payload;
    },
    setAccessTagsFiltersName: (state, action) => {
      state.name = action.payload;
    },
    setAccessTagsFiltersDescription: (state, action) => {
      state.description = action.payload;
    },
    setAccessTagsFiltersOrder: (state, action) => {
      state.order = {
        value: action.payload,
        label: orderVariants[action.payload],
      };
    },
    setAccessTagsFiltersSortBy: (state, action) => {
      state.sortBy = {
        value: action.payload,
        label: sortByVariants[action.payload],
      };
    },
    setAccessTagsFiltersEvent: (state, action) => {
      state.event = {
        value: action.payload,
        label: eventVariants[action.payload],
      };
    },
    setAccessTagsFiltersLimit: (state, action) => {
      state.limit = action.payload;
    },
    setAccessTagsFiltersPage: (state, action) => {
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
  setAccessTagsFiltersQuickSearchValue,
  setAccessTagsFiltersOrder,
  setAccessTagsFiltersName,
  setAccessTagsFiltersDescription,
  setAccessTagsFiltersIncludeMode,
  setAccessTagsFiltersSortBy,
  setAccessTagsFiltersLimit,
  setAccessTagsFiltersPage,
  clearAccessTagsFilter,
  setAccessTagsFiltersEvent,
} = accessTagsFiltersSlice.actions;
export const accessTagsFilterReducer = accessTagsFiltersSlice.reducer;
export const selectAccessTagsFilters = (state) => state.accessTags.filter;
