import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessTagsState } from "@src/redux/slices/AccessTags/@types";

export const accessTagsFiltersMainSortByVariants = {
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  deletedAt: "deletedAt",
  name: "name",
  description: "description",
};

export const accessTagsFiltersMainOrderByVariants = {
  ASC: "asc",
  DESC: "desc",
};

export interface AccessTagsFiltersMainState {
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

const initialState: AccessTagsFiltersMainState = {
  searchValue: "",
  name: "",
  description: "",
  includeMode: 0, // -1 - deleted, 0 - active, 1 - all
  order: { value: "ASC", label: "asc" },
  sortBy: { value: "createdAt", label: "createdAt" },
  limit: 100,
  page: 1,
};

const accessTagsFiltersMainSlice = createSlice({
  name: "accessTagsFilters",
  initialState,
  reducers: {
    setAccessTagsFiltersMainSearchValue: (
      state,
      action: PayloadAction<string>
    ) => {
      state.searchValue = action.payload;
    },
    setAccessTagsFiltersMainIncludeMode: (
      state,
      action: PayloadAction<typeof initialState.includeMode>
    ) => {
      state.includeMode = action.payload;
    },
    setAccessTagsFiltersMainName: (
      state,
      action: PayloadAction<typeof initialState.name>
    ) => {
      state.name = action.payload;
    },
    setAccessTagsFiltersMainDescription: (
      state,
      action: PayloadAction<typeof initialState.description>
    ) => {
      state.description = action.payload;
    },
    setAccessTagsFiltersMainOrder: (
      state,
      action: PayloadAction<keyof typeof accessTagsFiltersMainOrderByVariants>
    ) => {
      state.order = {
        value: action.payload,
        label: accessTagsFiltersMainOrderByVariants[action.payload] as
          | "asc"
          | "desc",
      };
    },
    setAccessTagsFiltersMainSortBy: (
      state,
      action: PayloadAction<keyof typeof accessTagsFiltersMainSortByVariants>
    ) => {
      state.sortBy = {
        value: action.payload,
        label: accessTagsFiltersMainSortByVariants[action.payload] as
          | "createdAt"
          | "updatedAt"
          | "deletedAt"
          | "name"
          | "description",
      };
    },
    setAccessTagsFiltersMainLimit: (
      state,
      action: PayloadAction<typeof initialState.limit>
    ) => {
      state.limit = action.payload;
    },
    setAccessTagsFiltersMainPage: (
      state,
      action: PayloadAction<typeof initialState.page>
    ) => {
      state.page = action.payload;
    },
    clearAccessTagsMainFilter: (state) => {
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
  setAccessTagsFiltersMainSearchValue,
  setAccessTagsFiltersMainName,
  setAccessTagsFiltersMainDescription,
  setAccessTagsFiltersMainIncludeMode,
  setAccessTagsFiltersMainSortBy,
  setAccessTagsFiltersMainLimit,
  setAccessTagsFiltersMainPage,
  clearAccessTagsMainFilter,
  setAccessTagsFiltersMainOrder,
} = accessTagsFiltersMainSlice.actions;
export const accessTagsFiltersMainReducer = accessTagsFiltersMainSlice.reducer;
export const selectAccessTagsFiltersMain = (state: AccessTagsState) =>
  state.accessTags.filters.main;
