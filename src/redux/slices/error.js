import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorMessage: "",
  opened: false,
};
const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.opened = true;
      state.errorMessage = action.payload;
    },
    setErrorClose: (state) => {
      state.opened = false;
    },
  },
});
export const { setError, setErrorClose } = errorSlice.actions;
export const selectError = (state) => state.error;
export const errorReducer = errorSlice.reducer;
