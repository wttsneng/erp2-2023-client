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
    setAccessTagsHistoryField: (state, action) => {
      state.field = action.payload;
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
  setAccessTagsHistoryField,
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
