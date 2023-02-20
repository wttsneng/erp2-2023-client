import { createSlice } from "@reduxjs/toolkit";
import { socket } from "../../core";

export const changeAccessTagsInputStarted = ({ itemId, attribute }) => {
  socket.emit("changeAccessTagsValueStart", { itemId, attribute });
};

export const changeAccessTagsInputEnded = ({ itemId, attribute }) => {
  socket.emit("changeAccessTagsValueEnd", { itemId, attribute });
};

export const changeAccessTagValue = ({ itemId, attribute, value }) => {
  socket.emit("changeAccessTagsValue", { itemId, attribute, value });
};

export const createAccessTag = ({ name, description }) => {
  socket.emit("createAccessTag", { name, description });
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
  mode: "create", // create, edit
};

const accessTagsInput = createSlice({
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
    setAccessTagsInputMode: (state, action) => {
      state.mode = action.payload;
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
  },
  extraReducers: (builder) => {},
});

export const {
  setAccessTagsInputId,
  setAccessTagsInputInitialName,
  setAccessTagsInputInitialDescription,
  setAccessTagsInputName,
  setAccessTagsInputDescription,
  setAccessTagsInputMode,
  setAccessTagsInputIsNameDisabled,
  setAccessTagsInputIsDescriptionDisabled,
  setAccessTagsInputIsNameFocused,
  setAccessTagsInputIsDescriptionFocused,
} = accessTagsInput.actions;
export const AccessTagsInputReducer = accessTagsInput.reducer;
export const selectAccessTagsInputData = (state) => state.accessTagsInput;
