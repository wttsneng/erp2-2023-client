import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  status: "idle", // idle, loading, success, error
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      state.status = "error";
    },
    setAuthorisation: (state, action) => {
      state.data = action.payload[1];
      state.status = "success";
      window.localStorage.setItem("token", action.payload[0]);
    },
    setPrograms: (state, action) => {
      state.data.programs = action.payload[0];
    },
  },
  extraReducers: {},
});

export const authReducer = authSlice.reducer;
export const selectAuthData = (state) => state.auth.data;
export const selectAuthStatus = (state) => state.auth.status;

export const { setAuthorisation, setPrograms } = authSlice.actions;
