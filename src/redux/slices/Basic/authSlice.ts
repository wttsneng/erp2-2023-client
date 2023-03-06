import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@src/redux/store";
import { axios } from "@src/core";

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const { data } = await axios.get("/api/auth/me");
  return data;
});
export const fetchAuthRefresh = createAsyncThunk(
  "auth/fetchAuthRefresh",
  async () => {
    const { data } = await axios.get("/api/auth/refresh");
    return data;
  }
);
export const fetchAuthLogout = createAsyncThunk(
  "auth/fetchAuthLogout",
  async () => {
    const { data } = await axios.post("/api/auth/logout");
    return data;
  }
);

interface IAuthState {
  data: any;
  status: "idle" | "loading" | "success" | "error";
}

const initialState: IAuthState = {
  data: null,
  status: "idle", // idle, loading, success, error
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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

export const authReducer = authSlice.reducer;
export const selectAuthData = (state: RootState) => state.auth.data;
export const selectAuthStatus = (state: RootState) => state.auth.status;
