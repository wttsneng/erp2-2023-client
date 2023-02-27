import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  position: null,
  isOpen: false,
  data: null,
  type: "",
};
const contextMenuSlice = createSlice({
  name: "contextMenu",
  initialState,
  reducers: {
    setContextMenuPosition: (state, action) => {
      state.position = action.payload;
    },
    setContextMenuType: (state, action) => {
      state.type = action.payload;
    },
    setContextMenuOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setContextMenuData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setContextMenuOpen,
  setContextMenuType,
  setContextMenuPosition,
  setContextMenuData,
} = contextMenuSlice.actions;
export const contextMenuReducer = contextMenuSlice.reducer;
export const selectContextMenuData = (state) => state.contextMenu;
