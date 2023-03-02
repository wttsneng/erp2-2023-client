import React from "react";

import { DialogActions, DialogContent, Button } from "@mui/material";

import { MyWindow } from "@src/components/Basic";
import { AccessTagsHistoryTablesMini } from "@src/components/AccessTags";

import { useSelector, useDispatch } from "react-redux";
import {
  selectAccessTagMiniHistoryWindowIsOpen,
  setAccessTagMiniHistoryWindowIsOpen,
} from "@src/redux/slices/AccessTags/miniHistoryWindow";

const width = 500;
const height = 380;

const defaultLeftX = window.innerWidth / 2 - width / 2 - 20;
const defaultTopY = -window.innerHeight / 2 + height / 2 + 20;

function AccessTagsWindowsMiniHistoryWindow() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectAccessTagMiniHistoryWindowIsOpen);

  const handleClose = () => {
    dispatch(setAccessTagMiniHistoryWindowIsOpen(false));
  };

  return (
    <MyWindow
      open={isOpen}
      onClose={handleClose}
      defaultwidth={width}
      defaultheight={height}
      defaultposition={{ x: defaultLeftX, y: defaultTopY }}
    >
      <React.Fragment>
        <DialogContent sx={{ paddingX: 2 }}>
          <AccessTagsHistoryTablesMini />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </React.Fragment>
    </MyWindow>
  );
}

export default AccessTagsWindowsMiniHistoryWindow;
