import { createSlice } from "@reduxjs/toolkit";

export const accessTagsHistoryFiltersMainSortByVariants = {
  createdAt: "Created date",
  updatedAt: "Updated date",
  deletedAt: "Deleted date",
  name: "Name",
  description: "Description",
};
export const accessTagsHistoryFiltersMainOrderByVariants = {
  ASC: "Ascending",
  DESC: "Descending",
};
const initialState = {
  searchValue: "",
  name: "",
  description: "",
  id: null,
  sortBy: { value: "createdAt", label: "Created date" },
  orderBy: { value: "DESC", label: "Descending" },
  field: null,
  limit: 20,
  page: 1,
};

const accessTagsHistoryFiltersMainSlice = createSlice({
  name: "accessTags/history/filters/main",
  initialState,
  reducers: {
    setAccessTagsHistoryFiltersMainSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setAccessTagsHistoryFiltersMainOrder: (state, action) => {
      state.orderBy = {
        value: action.payload,
        label: accessTagsHistoryFiltersMainOrderByVariants[action.payload],
      };
    },
    setAccessTagsHistoryFiltersMainSortBy: (state, action) => {
      state.sortBy = {
        value: action.payload,
        label: accessTagsHistoryFiltersMainSortByVariants[action.payload],
      };
    },
    setAccessTagsHistoryFiltersMainField: (state, action) => {
      state.field = action.payload;
    },
    setAccessTagsHistoryFiltersMainPage: (state, action) => {
      state.page = action.payload;
    },
    setAccessTagsHistoryFiltersMainLimit: (state, action) => {
      state.limit = action.payload;
    },
    setAccessTagsHistoryFiltersMainId: (state, action) => {
      state.id = action.payload;
    },
    clearAccessTagsHistoryFilterMain: (state, action) => {
      state.searchValue = "";
      state.name = "";
      state.description = "";
      state.id = null;
      state.sortBy = { value: "createdAt", label: "Created date" };
      state.orderBy = { value: "DESC", label: "Descending" };
      state.field = null;
      state.limit = 20;
      state.page = 1;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setAccessTagsHistoryFiltersMainSearchValue,
  setAccessTagsHistoryFiltersMainOrder,
  setAccessTagsHistoryFiltersMainSortBy,
  setAccessTagsFullHistoryFilterField,
  setAccessTagsHistoryFiltersMainField,
  setAccessTagsHistoryFiltersMainPage,
  setAccessTagsTagHistoryId,
  setAccessTagsHistoryFiltersMainLimit,
  clearAccessTagsHistoryFilterMain,
  setAccessTagsHistoryFiltersMainId,
} = accessTagsHistoryFiltersMainSlice.actions;
export const accessTagsHistoryFiltersMainReducer =
  accessTagsHistoryFiltersMainSlice.reducer;
export const selectAccessTagsHistoryFiltersMainFilter = (state) =>
  state.accessTags.history.filters.main;
