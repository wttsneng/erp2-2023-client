import React from "react";

import { MyWindow } from "@src/components/Basic";
import {
  selectAccessTagsFilterWindowIsOpen,
  setAccessTagsFilterWindowIsOpen,
} from "@src/redux/slices/AccessTags/filterWindow";
import { DialogActions, DialogContent, Button } from "@mui/material";
import { AccessTagsAllFilters } from "@src/components/AccessTags";
import { clearAccessTagsFilter } from "@src/redux/slices/AccessTags/filter";

import { useSelector, useDispatch } from "react-redux";

const width = 300;
const height = 380;
const defaultLeftX = window.innerWidth / 2 - width / 2 - 20;
const defaultTopY = -window.innerHeight / 2 + height / 2 + 20;

function AccessTagsWindowsFilterWindow() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectAccessTagsFilterWindowIsOpen);

  const handleClose = () => {
    dispatch(setAccessTagsFilterWindowIsOpen(false));
  };
  const handleClearFilters = () => {
    dispatch(clearAccessTagsFilter());
  };

  return (
    <MyWindow
      open={isOpen}
      onClose={handleClose}
      defaultwidth={width}
      defaultheight={height}
      defaultposition={{
        x: defaultLeftX,
        y: defaultTopY,
      }}
    >
      <React.Fragment>
        <DialogContent sx={{ paddingX: 2 }}>
          <AccessTagsAllFilters />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClearFilters}>Clear Filters</Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </React.Fragment>
    </MyWindow>
  );
}

export default AccessTagsWindowsFilterWindow;
