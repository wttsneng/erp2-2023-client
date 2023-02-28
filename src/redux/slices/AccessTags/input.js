import { createSlice } from "@reduxjs/toolkit";
import { socket } from "@src/core";

export const changeAccessTagsInputStarted = ({ itemId, attribute }) => {
  socket.emit("changeAccessTagsInputStarted", { itemId, attribute });
};

export const changeAccessTagsInputEnded = ({ itemId, attribute }) => {
  socket.emit("changeAccessTagsInputEnded", { itemId, attribute });
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

const AccessTagsInputSlice = createSlice({
  name: "accessTagsInput",
  initialState,
  reducers: {
    setAccessTagsInputId: (state, action) => {
      state.id = action.payload;
    },
    setAccessTagsInputInitialName: (state, action) => {
      state.initialName = action.payload;
    },
    setAccessTagsInputInitialDescription: (state, action) => {
      state.initialDescription = action.payload;
    },
    setAccessTagsInputName: (state, action) => {
      state.name = action.payload;
    },
    setAccessTagsInputDescription: (state, action) => {
      state.description = action.payload;
    },
    setAccessTagsInputIsNameDisabled: (state, action) => {
      state.isNameDisabled = action.payload;
    },
    setAccessTagsInputIsDescriptionDisabled: (state, action) => {
      state.isDescriptionDisabled = action.payload;
    },
    setAccessTagsInputIsNameFocused: (state, action) => {
      state.isNameFocused = action.payload;
    },
    setAccessTagsInputIsDescriptionFocused: (state, action) => {
      state.isDescriptionFocused = action.payload;
    },
    clearAccessTagsInput: (state) => {
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
  setAccessTagsInputId,
  setAccessTagsInputInitialName,
  setAccessTagsInputInitialDescription,
  setAccessTagsInputName,
  setAccessTagsInputDescription,
  setAccessTagsInputIsNameDisabled,
  setAccessTagsInputIsDescriptionDisabled,
  setAccessTagsInputIsNameFocused,
  setAccessTagsInputIsDescriptionFocused,
  clearAccessTagsInput,
} = AccessTagsInputSlice.actions;
export const accessTagsInputReducer = AccessTagsInputSlice.reducer;
export const selectAccessTagsInputData = (state) => state.accessTags.input;
