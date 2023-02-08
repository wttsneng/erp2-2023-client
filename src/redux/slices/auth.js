import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../core";

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async (params) => {
  const { data } = await axios.post("api/auth/login", params);
  return data;
});
export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const { data } = await axios.get("api/auth/me");
  return data;
});
export const fetchAuthRefresh = createAsyncThunk(
  "auth/fetchAuthRefresh",
  async () => {
    const { data } = await axios.get("api/auth/refresh");
    return data;
  }
);
export const fetchAuthLogout = createAsyncThunk(
  "auth/fetchAuthLogout",
  async () => {
    const { data } = await axios.post("api/auth/logout");
    return data;
  }
);
const initialState = {
  data: null,
  status: "idle", // idle, loading, success, error
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAuth.pending]: (state, action) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
    [fetchAuth.rejected]: (state, action) => {
      state.status = "error";
      state.data = null;
    },
    [fetchAuthMe.pending]: (state, action) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchAuthMe.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
    [fetchAuthMe.rejected]: (state, action) => {
      state.status = "error";
      state.data = null;
    },
    [fetchAuthRefresh.pending]: (state, action) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchAuthRefresh.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
    [fetchAuthRefresh.rejected]: (state, action) => {
      state.status = "error";
      state.data = null;
    },
    [fetchAuthLogout.pending]: (state, action) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchAuthLogout.fulfilled]: (state, action) => {
      state.status = "error";
      state.data = null;
    },
    [fetchAuthLogout.rejected]: (state, action) => {
      state.status = "error";
      state.data = null;
    },
  },
});

export const authReducer = authSlice.reducer;
export const selectAuthData = (state) => state.auth.data;
export const selectAuthStatus = (state) => state.auth.status;
