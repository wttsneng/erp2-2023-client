import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../core";

export const fetchAuth = createAsyncThunk(
  "auth/fetchAuth",
  async ({ login, password }) => {
    const { data } = await axios.post("api/auth/login", { login, password });
    return data;
  }
);
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
  reducers: {
    some: (state, action) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchAuth.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(fetchAuthMe.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAuthMe.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchAuthMe.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(fetchAuthRefresh.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAuthRefresh.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchAuthRefresh.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(fetchAuthLogout.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAuthLogout.fulfilled, (state, action) => {
        state.status = "error";
        state.data = null;
      })
      .addCase(fetchAuthLogout.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const { some } = authSlice.actions;
export const authReducer = authSlice.reducer;
export const selectAuthData = (state) => state.auth.data;
export const selectAuthStatus = (state) => state.auth.status;
