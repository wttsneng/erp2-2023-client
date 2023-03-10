import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessGroupsState } from "@src/redux/slices/AccessGroups/@types";

export const accessGroupsFiltersMainSortByVariants = {
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  deletedAt: "deletedAt",
  name: "name",
  description: "description",
};

export const accessGroupsFiltersMainOrderByVariants = {
  ASC: "asc",
  DESC: "desc",
};

export interface AccessGroupsFiltersMainState {
  searchValue: string;
  name: string;
  description: string;
  includeMode: -1 | 0 | 1;
  order: { value: "ASC" | "DESC"; label: "asc" | "desc" };
  sortBy: {
    value: "createdAt" | "updatedAt" | "deletedAt" | "name" | "description";
    label: "createdAt" | "updatedAt" | "deletedAt" | "name" | "description";
  };
  limit: number;
  page: number;
}

const initialState: AccessGroupsFiltersMainState = {
  searchValue: "",
  name: "",
  description: "",
  includeMode: 0, // -1 - deleted, 0 - active, 1 - all
  order: { value: "ASC", label: "asc" },
  sortBy: { value: "createdAt", label: "createdAt" },
  limit: 100,
  page: 1,
};

const accessGroupsFiltersMainSlice = createSlice({
  name: "accessGroupsFilters",
  initialState,
  reducers: {
    setAccessGroupsFiltersMainSearchValue: (
      state,
      action: PayloadAction<string>
    ) => {
      state.searchValue = action.payload;
    },
    setAccessGroupsFiltersMainIncludeMode: (
      state,
      action: PayloadAction<typeof initialState.includeMode>
    ) => {
      state.includeMode = action.payload;
    },
    setAccessGroupsFiltersMainName: (
      state,
      action: PayloadAction<typeof initialState.name>
    ) => {
      state.name = action.payload;
    },
    setAccessGroupsFiltersMainDescription: (
      state,
      action: PayloadAction<typeof initialState.description>
    ) => {
      state.description = action.payload;
    },
    setAccessGroupsFiltersMainOrder: (
      state,
      action: PayloadAction<keyof typeof accessGroupsFiltersMainOrderByVariants>
    ) => {
      state.order = {
        value: action.payload,
        label: accessGroupsFiltersMainOrderByVariants[action.payload] as
          | "asc"
          | "desc",
      };
    },
    setAccessGroupsFiltersMainSortBy: (
      state,
      action: PayloadAction<keyof typeof accessGroupsFiltersMainSortByVariants>
    ) => {
      state.sortBy = {
        value: action.payload,
        label: accessGroupsFiltersMainSortByVariants[action.payload] as
          | "createdAt"
          | "updatedAt"
          | "deletedAt"
          | "name"
          | "description",
      };
    },
    setAccessGroupsFiltersMainLimit: (
      state,
      action: PayloadAction<typeof initialState.limit>
    ) => {
      state.limit = action.payload;
    },
    setAccessGroupsFiltersMainPage: (
      state,
      action: PayloadAction<typeof initialState.page>
    ) => {
      state.page = action.payload;
    },
    clearAccessGroupsMainFilter: (state) => {
      state.searchValue = "";
      state.name = "";
      state.description = "";
      state.includeMode = 0;
      state.order = { value: "ASC", label: "asc" };
      state.sortBy = { value: "createdAt", label: "createdAt" };
      state.limit = 100;
      state.page = 1;
    },
  },
  extraReducers: () => {},
});

export const {
  setAccessGroupsFiltersMainSearchValue,
  setAccessGroupsFiltersMainName,
  setAccessGroupsFiltersMainDescription,
  setAccessGroupsFiltersMainIncludeMode,
  setAccessGroupsFiltersMainSortBy,
  setAccessGroupsFiltersMainLimit,
  setAccessGroupsFiltersMainPage,
  clearAccessGroupsMainFilter,
  setAccessGroupsFiltersMainOrder,
} = accessGroupsFiltersMainSlice.actions;
export const accessGroupsFiltersMainReducer =
  accessGroupsFiltersMainSlice.reducer;
export const selectAccessGroupsFiltersMain = (state: AccessGroupsState) =>
  state.accessGroups.filters.main;
