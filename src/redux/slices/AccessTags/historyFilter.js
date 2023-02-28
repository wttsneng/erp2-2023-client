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

const accessTagsHistoryFilterSlice = createSlice({
  name: "accessTagsHistory",
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
    setAccessTagsHistoryField: (state, action) => {
      state.field = action.payload;
    },
    setAccessTagsHistoryWithUserLogin: (state, action) => {
      state.withUserLogin = action.payload;
    },
    setAccessTagsHistoryPage: (state, action) => {
      state.page = action.payload;
    },
    setAccessTagsTagHistoryId: (state, action) => {
      state.id = action.payload;
    },
    setAccessTagsTagHistoryLimit: (state, action) => {
      state.limit = action.payload;
    },
    clearAccessTagsHistoryFilter: (state) => {
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
  setAccessTagsHistorySearchValue,
  setAccessTagsHistoryOrder,
  setAccessTagsHistorySortBy,
  setAccessTagsHistoryField,
  setAccessTagsHistoryPage,
  setAccessTagsTagHistoryId,
  setAccessTagsTagHistoryLimit,
  clearAccessTagsHistoryFilter,
} = accessTagsHistoryFilterSlice.actions;
export const accessTagsHistoryFilterReducer =
  accessTagsHistoryFilterSlice.reducer;
export const selectAccessTagsHistoryFilter = (state) =>
  state.accessTags.historyFilter;
