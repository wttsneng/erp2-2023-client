import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessGroupsState } from "@src/redux/slices/AccessGroups/@types";

interface IInitialState {
  open: boolean;
  width: number;
  height: number;
}

const initialState: IInitialState = {
  open: false,
  width: 0,
  height: 0,
};

const AccessGroupsHistoryWindowsMain = createSlice({
  name: "accessGroups/history/windows/main",
  initialState,
  reducers: {
    setAccessGroupsHistoryWindowsMainOpen: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.open = action.payload;
    },
    setAccessGroupsHistoryWindowsMainWidth: (
      state,
      action: PayloadAction<number>
    ) => {
      state.width = action.payload;
    },
    setAccessGroupsHistoryWindowsMainHeight: (
      state,
      action: PayloadAction<number>
    ) => {
      state.height = action.payload;
    },
  },
  extraReducers: () => {},
});

export const {
  setAccessGroupsHistoryWindowsMainOpen,
  setAccessGroupsHistoryWindowsMainWidth,
  setAccessGroupsHistoryWindowsMainHeight,
} = AccessGroupsHistoryWindowsMain.actions;
export const accessGroupsHistoryWindowsMainReducer =
  AccessGroupsHistoryWindowsMain.reducer;
export const selectAccessGroupsHistoryWindowsMainOpen = (
  state: AccessGroupsState
) => state.accessGroups.history.windows.main.open;
export const selectAccessGroupsHistoryWindowsMainWidth = (
  state: AccessGroupsState
) => state.accessGroups.history.windows.main.width;
