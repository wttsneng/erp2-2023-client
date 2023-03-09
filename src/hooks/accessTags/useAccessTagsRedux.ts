import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import {
  AccessTagsRootState,
  AccessTagsRootDispatch,
} from "@src/redux/slices/AccessTags/@types";

type AccessTagsState = AccessTagsRootState;
type AccessTagsDispatch = AccessTagsRootDispatch;
export const useAccessTagsDispatch: () => AccessTagsDispatch = useDispatch;
export const useAccessTagsSelector: TypedUseSelectorHook<AccessTagsState> =
  useSelector;
