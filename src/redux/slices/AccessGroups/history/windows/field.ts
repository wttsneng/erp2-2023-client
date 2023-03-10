import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessGroupsState } from "@src/redux/slices/AccessGroups/@types";

interface IInitialState {
  open: boolean;
}

const initialState: IInitialState = {
  open: false,
};
const accessGroupsHistoryWindowsFieldSlice = createSlice({
  name: "accessGroups/history/windows/field",
  initialState,
  reducers: {
    setAccessGroupsHistoryWindowsFieldOpen: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.open = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { setAccessGroupsHistoryWindowsFieldOpen } =
  accessGroupsHistoryWindowsFieldSlice.actions;
export const accessGroupsHistoryWindowsFieldReducer =
  accessGroupsHistoryWindowsFieldSlice.reducer;
export const selectAccessGroupsHistoryWindowsFieldOpen = (
  state: AccessGroupsState
) => state.accessGroups.history.windows.field.open;
