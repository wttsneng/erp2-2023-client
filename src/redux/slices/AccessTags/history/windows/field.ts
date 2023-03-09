import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessTagsState } from "@src/redux/slices/AccessTags/@types";

interface IInitialState {
  open: boolean;
}

const initialState: IInitialState = {
  open: false,
};
const accessTagsHistoryWindowsFieldSlice = createSlice({
  name: "accessTags/history/windows/field",
  initialState,
  reducers: {
    setAccessTagsHistoryWindowsFieldOpen: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.open = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { setAccessTagsHistoryWindowsFieldOpen } =
  accessTagsHistoryWindowsFieldSlice.actions;
export const accessTagsHistoryWindowsFieldReducer =
  accessTagsHistoryWindowsFieldSlice.reducer;
export const selectAccessTagsHistoryWindowsFieldOpen = (
  state: AccessTagsState
) => state.accessTags.history.windows.field.open;
