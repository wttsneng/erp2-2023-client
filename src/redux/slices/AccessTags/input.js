import { createSlice } from "@reduxjs/toolkit";
import { socket } from "@src/core";

export const changeInputStarted = ({ itemId, attribute }) => {
  socket.emit("changeValueStart", { itemId, attribute });
};

export const changeInputEnded = ({ itemId, attribute }) => {
  socket.emit("changeValueEnd", { itemId, attribute });
};

const initialState = {
  id: null,
  initialName: "",
  initialDescription: "",
  name: "",
  description: "",
  isNameDisabled: false,
  isDescriptionDisabled: false,
  isNameFocused: false,
  isDescriptionFocused: false,
};

const inputSlice = createSlice({
  name: "accessTags/input",
  initialState,
  reducers: {
    setInputId: (state, action) => {
      state.id = action.payload;
    },
    setInputInitialName: (state, action) => {
      state.initialName = action.payload;
    },
    setInputInitialDescription: (state, action) => {
      state.initialDescription = action.payload;
    },
    setInputName: (state, action) => {
      state.name = action.payload;
    },
    setInputDescription: (state, action) => {
      state.description = action.payload;
    },
    setInputIsNameDisabled: (state, action) => {
      state.isNameDisabled = action.payload;
    },
    setInputIsDescriptionDisabled: (state, action) => {
      state.isDescriptionDisabled = action.payload;
    },
    setInputIsNameFocused: (state, action) => {
      state.isNameFocused = action.payload;
    },
    setInputIsDescriptionFocused: (state, action) => {
      state.isDescriptionFocused = action.payload;
    },
    clearInput: (state) => {
      state.id = null;
      state.initialName = "";
      state.initialDescription = "";
      state.name = "";
      state.description = "";
      state.isNameDisabled = false;
      state.isDescriptionDisabled = false;
      state.isNameFocused = false;
      state.isDescriptionFocused = false;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setInputId,
  setInputInitialName,
  setInputInitialDescription,
  setInputName,
  setInputDescription,
  setInputIsNameDisabled,
  setInputIsDescriptionDisabled,
  setInputIsNameFocused,
  setInputIsDescriptionFocused,
  clearInput,
} = inputSlice.actions;
export const inputReducer = inputSlice.reducer;
export const selectInputData = (state) => state.accessTags.input;
