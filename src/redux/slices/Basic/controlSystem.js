import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      type: "edit", // Edit, notEdit
      collection: "access_tags",
      field: "name",
      itemId: 1,
      edit: "123bhfrfgfdsg34543523fsd",
    },
    {
      id: 2,
      type: "notEdit", // Edit, notEdit
    },
  ],
  look: {
    id: 1,
    type: "edit", // Edit, notEdit
    collection: "access_tags",
    field: "name",
  },
  edit: {
    id: 1,
    type: "edit", // Edit, notEdit
    collection: "access_tags",
    field: "name",
  },
};
const controlSystemSlice = createSlice({
  name: "controlSystem",
  initialState,
  reducers: {
    changeLook: (state, action) => {
      state = action.payload;
    },
    setEdit: (state, action) => {
      state.edit = action.payload;
    },
  },
  extraReducers: (builder) => {},
});
