import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "@src/core";
import { RootState } from "@src/redux/store";
import { IAuthData } from "./@types";

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const { data } = await axios.get("/api/auth/me");
  return data as IAuthData;
});
export const fetchAuthRefresh = createAsyncThunk(
  "auth/fetchAuthRefresh",
  async () => {
    const { data } = await axios.get("/api/auth/refresh");
    return data as IAuthData;
  }
);
export const fetchAuthLogout = createAsyncThunk(
  "auth/fetchAuthLogout",
  async () => {
    const { data } = await axios.post("/api/auth/logout");
    return data;
  }
);

interface IInitialState {
  data: IAuthData | null;
  status: "idle" | "loading" | "success" | "error";
}
const initialState: IInitialState = {
  data: null,
  status: "idle",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthMe.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAuthMe.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchAuthMe.rejected, (state) => {
        state.status = "error";
      })
      .addCase(fetchAuthRefresh.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAuthRefresh.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchAuthRefresh.rejected, (state) => {
        state.status = "error";
      })
      .addCase(fetchAuthLogout.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAuthLogout.fulfilled, (state) => {
        state.status = "error";
        state.data = null;
      })
      .addCase(fetchAuthLogout.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const authReducer = authSlice.reducer;
export const selectAuthData = (state: RootState) => state.auth.data;
export const selectAuthStatus = (state: RootState) => state.auth.status;
