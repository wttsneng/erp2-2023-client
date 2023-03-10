import { ThunkDispatch } from "redux-thunk";
import { RootState, AppDispatch } from "@src/redux/store";
import { accessGroupsCombinesReducers } from "@src/redux/slices/AccessGroups/initAccessGroupsRedux";

export type AccessGroupsState = {
  accessGroups: ReturnType<typeof accessGroupsCombinesReducers>;
};
export type AccessGroupsRootState = AccessGroupsState & RootState;
export type AccessGroupsDispatch = ThunkDispatch<
  AccessGroupsRootState,
  void,
  any
>;
export type AccessGroupsRootDispatch = ThunkDispatch<
  AccessGroupsRootState,
  void,
  any
> &
  AppDispatch;

export interface IAccessGroups {
  id: number;
  name: string;
  description: string;
  deletedAt: string;
  createdAt: string;
  updatedAt: string;
}
export interface IAccessGroupsHistory {
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
