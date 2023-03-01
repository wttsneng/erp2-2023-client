import React from "react";

import { Stack } from "@mui/material";

import { MyWindow } from "@src/components/Basic";
import {
  selectAccessTagsFullHistoryWindowIsOpen,
  setAccessTagsFullHistoryWindowIsOpen,
} from "@src/redux/slices/AccessTags/fullHistoryWindow";

import {
  AccessTagsHistoryFiltersSearch,
  AccessTagsHistoryTablesFull,
  AccessTagsHistoryFiltersAutoComplete,
} from "@src/components/AccessTags";

import { useSelector, useDispatch } from "react-redux";

const width = 1000;
const height = 600;

function AccessTagsWindowsFullHistoryWindow() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectAccessTagsFullHistoryWindowIsOpen);
  const handleClose = () => {
    dispatch(setAccessTagsFullHistoryWindowIsOpen(false));
  };

  const defaultLeftX = 0;
  const defaultTopY = 0;
  return (
    <MyWindow
      open={isOpen}
      onClose={handleClose}
      defaultwidth={width}
      defaultheight={height}
      defaultposition={{ x: defaultLeftX, y: defaultTopY }}
    >
      <React.Fragment>
        <Stack spacing={2} sx={{ height: "100%" }}>
          <AccessTagsHistoryFiltersSearch />
          <AccessTagsHistoryFiltersAutoComplete />
          <AccessTagsHistoryTablesFull />
        </Stack>
      </React.Fragment>
    </MyWindow>
  );
}

export default AccessTagsWindowsFullHistoryWindow;
