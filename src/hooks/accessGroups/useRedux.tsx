import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import {
  AccessGroupsState,
  AccessGroupsDispatch,
} from "@src/redux/slices/AccessGroups/@types";
import { RootState, AppDispatch } from "@src/redux/store";
import {
  AccessTagsState,
  AccessTagsDispatch,
} from "@src/redux/slices/AccessTags/@types";

type AccessGroupsPageState = AccessGroupsState & AccessTagsState & RootState;
type AccessGroupsPageDispatch = AccessGroupsDispatch &
  AccessTagsDispatch &
  AppDispatch;
export const useAccessGroupsDispatch: () => AccessGroupsPageDispatch =
  useDispatch;
export const useAccessGroupsSelector: TypedUseSelectorHook<AccessGroupsPageState> =
  useSelector;
