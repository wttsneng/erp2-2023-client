import { ThunkDispatch } from "redux-thunk";
import { RootState, AppDispatch } from "@src/redux/store";
import { accessTagsCombinesReducers } from "@src/redux/slices/AccessTags/initAccessTagsRedux";

export type AccessTagsState = {
  accessTags: ReturnType<typeof accessTagsCombinesReducers>;
};
export type AccessTagsRootState = AccessTagsState & RootState;
export type AccessTagsDispatch = ThunkDispatch<AccessTagsRootState, void, any>;
export type AccessTagsRootDispatch = ThunkDispatch<
  AccessTagsRootState,
  void,
  any
> &
  AppDispatch;

export interface IAccessTags {
  id: number;
  name: string;
  description: string;
  deletedAt: string;
}
export interface IAccessTagsHistory {
  id: number;
  access_tag_id: number;
  field: string;
  old_value: string;
  new_value: string;
  user_id: number;
  createdAt: string;
  updatedAt: string;
  "user.login": string;
  "access_tag.name": string;
}
