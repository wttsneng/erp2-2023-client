import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessTagsState } from "@src/redux/slices/AccessTags/@types";

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

const AccessTagsHistoryWindowsMain = createSlice({
  name: "accessTags/history/windows/main",
  initialState,
  reducers: {
    setAccessTagsHistoryWindowsMainOpen: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.open = action.payload;
    },
    setAccessTagsHistoryWindowsMainWidth: (
      state,
      action: PayloadAction<number>
    ) => {
      state.width = action.payload;
    },
    setAccessTagsHistoryWindowsMainHeight: (
      state,
      action: PayloadAction<number>
    ) => {
      state.height = action.payload;
    },
  },
  extraReducers: () => {},
});

export const {
  setAccessTagsHistoryWindowsMainOpen,
  setAccessTagsHistoryWindowsMainWidth,
  setAccessTagsHistoryWindowsMainHeight,
} = AccessTagsHistoryWindowsMain.actions;
export const accessTagsHistoryWindowsMainReducer =
  AccessTagsHistoryWindowsMain.reducer;
export const selectAccessTagsHistoryWindowsMainOpen = (
  state: AccessTagsState
) => state.accessTags.history.windows.main.open;
export const selectAccessTagsHistoryWindowsMainWidth = (
  state: AccessTagsState
) => state.accessTags.history.windows.main.width;
