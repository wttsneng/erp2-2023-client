import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessTagsState } from "../../@types";

export const accessTagsHistoryFiltersMainSortByVariants = {
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  deletedAt: "deletedAt",
  name: "name",
  description: "description",
};

export const accessTagsHistoryFiltersMainOrderByVariants = {
  ASC: "asc",
  DESC: "desc",
};

interface IInitialState {
  searchValue: string;
  name: string;
  description: string;
  id: number | null;
  sortBy: {
    value: keyof typeof accessTagsHistoryFiltersMainSortByVariants;
    label: "createdAt" | "updatedAt" | "deletedAt" | "name" | "description";
  };
  orderBy: {
    value: keyof typeof accessTagsHistoryFiltersMainOrderByVariants;
    label: "asc" | "desc";
  };
  limit: number;
  page: number;
  field: string | null;
}

const initialState: IInitialState = {
  searchValue: "",
  name: "",
  description: "",
  id: null,
  sortBy: { value: "createdAt", label: "createdAt" },
  orderBy: { value: "DESC", label: "desc" },
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
    setAccessTagsHistoryFiltersMainOrder: (
      state,
      action: PayloadAction<
        keyof typeof accessTagsHistoryFiltersMainOrderByVariants
      >
    ) => {
      state.orderBy = {
        value: action.payload,
        label: accessTagsHistoryFiltersMainOrderByVariants[action.payload] as
          | "asc"
          | "desc",
      };
    },
    setAccessTagsHistoryFiltersMainSortBy: (
      state,
      action: PayloadAction<
        keyof typeof accessTagsHistoryFiltersMainSortByVariants
      >
    ) => {
      state.sortBy = {
        value: action.payload,
        label: accessTagsHistoryFiltersMainSortByVariants[action.payload] as
          | "createdAt"
          | "updatedAt"
          | "deletedAt"
          | "name"
          | "description",
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
    clearAccessTagsHistoryFilterMain: (state) => {
      state.searchValue = "";
      state.name = "";
      state.description = "";
      state.id = null;
      state.sortBy = { value: "createdAt", label: "createdAt" };
      state.orderBy = { value: "DESC", label: "desc" };
      state.field = null;
      state.limit = 20;
      state.page = 1;
    },
  },
  extraReducers: () => {},
});

export const {
  setAccessTagsHistoryFiltersMainSearchValue,
  setAccessTagsHistoryFiltersMainOrder,
  setAccessTagsHistoryFiltersMainSortBy,
  setAccessTagsHistoryFiltersMainField,
  setAccessTagsHistoryFiltersMainPage,
  setAccessTagsHistoryFiltersMainLimit,
  clearAccessTagsHistoryFilterMain,
  setAccessTagsHistoryFiltersMainId,
} = accessTagsHistoryFiltersMainSlice.actions;
export const accessTagsHistoryFiltersMainReducer =
  accessTagsHistoryFiltersMainSlice.reducer;
export const selectAccessTagsHistoryFiltersMainFilter = (
  state: AccessTagsState
) => state.accessTags.history.filters.main;
