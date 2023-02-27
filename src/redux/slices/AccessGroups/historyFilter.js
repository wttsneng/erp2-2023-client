import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  order: "DESC",
  id: null,
  sortBy: "createdAt", // createdAt, userLogin, new_value
  field: null, // name, description
  limit: 20,
  page: 1,
};

const historyFilterSlice = createSlice({
  name: "accessGroups/historyFilter",
  initialState,
  reducers: {
    setHistorySearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setHistoryOrder: (state, action) => {
      state.order = action.payload;
    },
    setHistorySortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setHistoryField: (state, action) => {
      state.field = action.payload;
    },
    setHistoryWithUserLogin: (state, action) => {
      state.withUserLogin = action.payload;
    },
    setHistoryPage: (state, action) => {
      state.page = action.payload;
    },
    setTagHistoryId: (state, action) => {
      state.id = action.payload;
    },
    setTagHistoryLimit: (state, action) => {
      state.limit = action.payload;
    },
    clearHistoryFilter: (state) => {
      state.searchValue = "";
      state.order = "DESC";
      state.sortBy = "createdAt";
      state.field = null;
      state.page = 1;
      state.limit = 20;
      state.id = null;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setHistorySearchValue,
  setHistoryOrder,
  setHistorySortBy,
  setHistoryField,
  setHistoryPage,
  setTagHistoryId,
  setTagHistoryLimit,
  clearHistoryFilter,
} = historyFilterSlice.actions;
export const historyFilterReducer = historyFilterSlice.reducer;
export const selectHistoryFilter = (state) => state.accessGroups.historyFilter;
