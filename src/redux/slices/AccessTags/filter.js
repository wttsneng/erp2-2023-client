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

const filterSlice = createSlice({
  name: "accessTags/filter",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setOrder: (state, action) => {
      state.order = {
        value: action.payload,
        label: orderVariants[action.payload],
      };
    },
    setSortBy: (state, action) => {
      state.sortBy = {
        value: action.payload,
        label: sortByVariants[action.payload],
      };
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    clearFilter: (state) => {
      state.searchValue = "";
      state.order = { value: "ASC", label: "Ascending" };
      state.sortBy = { value: "createdAt", label: "Date" };
      state.limit = 100;
      state.page = 1;
    },
  },
  extraReducers: (builder) => {},
});

export const { setSearchValue, setOrder, setSortBy, setLimit, setPage } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const selectFilters = (state) => state.accessTags.filter;
