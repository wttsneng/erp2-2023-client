import { createSlice } from "@reduxjs/toolkit";

export const accessTagsFullHistoryFilterSortByVariants = {
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

const accessTagsFullHistoryFilterSlice = createSlice({
  name: "accessTagsFullHistoryFilter",
  initialState,
  reducers: {
    setAccessTagsFullHistoryFillterSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setAccessTagsFullHistoryFilterOrder: (state, action) => {
      state.orderBy = {
        value: action.payload,
        label: orderVariants[action.payload],
      };
    },
    setAccessTagsFullHistoryFilterSortBy: (state, action) => {
      state.sortBy = {
        value: action.payload,
        label: accessTagsFullHistoryFilterSortByVariants[action.payload],
      };
    },
    setAccessTagsFullHistoryFiltersField: (state, action) => {
      state.field = action.payload;
    },
    setAccessTagsFullHistoryFilterPage: (state, action) => {
      state.page = action.payload;
    },
    setAccessTagsTagFullHistoryFilterLimit: (state, action) => {
      state.limit = action.payload;
    },
    setAccessTagsFullHistoryFilterId: (state, action) => {
      state.id = action.payload;
    },
    setAccessTagsFullHistoryFilterField: (state, action) => {
      state.field = action.payload;
    },
    clearAccessTagsFullHistoryFilter: (state) => {
      state.searchValue = "";
      state.orderBy = { value: "DESC", label: "Descending" };
      state.sortBy = { value: "createdAt", label: "Created date" };
      state.field = null;
      state.page = 1;
      state.field = null;
      state.limit = 20;
      state.id = null;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setAccessTagsFullHistoryFillterSearchValue,
  setAccessTagsFullHistoryFilterOrder,
  setAccessTagsFullHistoryFilterSortBy,
  setAccessTagsFullHistoryFilterField,
  setAccessTagsFullHistoryFiltersField,
  setAccessTagsFullHistoryFilterPage,
  setAccessTagsTagHistoryId,
  setAccessTagsTagFullHistoryFilterLimit,
  clearAccessTagsFullHistoryFilter,
  setAccessTagsFullHistoryFilterId,
} = accessTagsFullHistoryFilterSlice.actions;
export const accessTagsFullHistoryFilterReducer =
  accessTagsFullHistoryFilterSlice.reducer;
export const selectAccessTagsFullHistoryFilter = (state) =>
  state.accessTags.fullHistoryFilter;
