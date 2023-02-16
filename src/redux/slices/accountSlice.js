import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    tags: [],
    tagHistory: [],
  },
  status: "idle", // idle, loading, success, error
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setTags: (state, action) => {
      state.data.tags = action.payload;
      state.status = "success";
    },
    setTagHistory: (state, action) => {
      state.data.tagHistory = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setTags } = accountSlice.actions;
export const accountReducer = accountSlice.reducer;
export const selectAccountData = (state) => state.account.data;
export const selectAccountStatus = (state) => state.account.status;
