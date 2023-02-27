import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  order: "ASC",
  id: null,
  sortBy: "createdAt", // createdAt, userLogin, new_value
  field: "name", // name, description
  limit: 50,
  page: 1,
};

const historyFilterSlice = createSlice({
  name: "accessTags/historyFilter",
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
} = historyFilterSlice.actions;
export const historyFilterReducer = historyFilterSlice.reducer;
export const selectHistoryFilter = (state) => state.accessTags.HistoryFilter;
