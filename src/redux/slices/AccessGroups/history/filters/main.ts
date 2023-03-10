import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessGroupsState } from "../../@types";

export const accessGroupsHistoryFiltersMainSortByVariants = {
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  deletedAt: "deletedAt",
  name: "name",
  description: "description",
};

export const accessGroupsHistoryFiltersMainOrderByVariants = {
  ASC: "asc",
  DESC: "desc",
};

interface IInitialState {
  searchValue: string;
  name: string;
  description: string;
  id: number | null;
  sortBy: {
    value: keyof typeof accessGroupsHistoryFiltersMainSortByVariants;
    label: "createdAt" | "updatedAt" | "deletedAt" | "name" | "description";
  };
  orderBy: {
    value: keyof typeof accessGroupsHistoryFiltersMainOrderByVariants;
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

const accessGroupsHistoryFiltersMainSlice = createSlice({
  name: "accessGroups/history/filters/main",
  initialState,
  reducers: {
    setAccessGroupsHistoryFiltersMainSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setAccessGroupsHistoryFiltersMainOrder: (
      state,
      action: PayloadAction<
        keyof typeof accessGroupsHistoryFiltersMainOrderByVariants
      >
    ) => {
      state.orderBy = {
        value: action.payload,
        label: accessGroupsHistoryFiltersMainOrderByVariants[action.payload] as
          | "asc"
          | "desc",
      };
    },
    setAccessGroupsHistoryFiltersMainSortBy: (
      state,
      action: PayloadAction<
        keyof typeof accessGroupsHistoryFiltersMainSortByVariants
      >
    ) => {
      state.sortBy = {
        value: action.payload,
        label: accessGroupsHistoryFiltersMainSortByVariants[action.payload] as
          | "createdAt"
          | "updatedAt"
          | "deletedAt"
          | "name"
          | "description",
      };
    },
    setAccessGroupsHistoryFiltersMainField: (state, action) => {
      state.field = action.payload;
    },
    setAccessGroupsHistoryFiltersMainPage: (state, action) => {
      state.page = action.payload;
    },
    setAccessGroupsHistoryFiltersMainLimit: (state, action) => {
      state.limit = action.payload;
    },
    setAccessGroupsHistoryFiltersMainId: (state, action) => {
      state.id = action.payload;
    },
    clearAccessGroupsHistoryFilterMain: (state) => {
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
  setAccessGroupsHistoryFiltersMainSearchValue,
  setAccessGroupsHistoryFiltersMainOrder,
  setAccessGroupsHistoryFiltersMainSortBy,
  setAccessGroupsHistoryFiltersMainField,
  setAccessGroupsHistoryFiltersMainPage,
  setAccessGroupsHistoryFiltersMainLimit,
  clearAccessGroupsHistoryFilterMain,
  setAccessGroupsHistoryFiltersMainId,
} = accessGroupsHistoryFiltersMainSlice.actions;
export const accessGroupsHistoryFiltersMainReducer =
  accessGroupsHistoryFiltersMainSlice.reducer;
export const selectAccessGroupsHistoryFiltersMainFilter = (
  state: AccessGroupsState
) => state.accessGroups.history.filters.main;
