import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  position: { vertical: "bottom", horizontal: "left" },
  isOpen: false,
  data: null,
  type: "",
};
const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state = action.payload;
    },
    setAlertPosition: (state, action) => {
      state.position = action.payload;
    },
    setAlertOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setAlertData: (state, action) => {
      state.data = action.payload;
    },
    setAlertType: (state, action) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {},
});
export const {
  setAlert,
  setAlertPosition,
  setAlertOpen,
  setAlertData,
  setAlertType,
} = alertSlice.actions;

export const alertReducer = alertSlice.reducer;
export const selectAlert = (state) => state.alert;
