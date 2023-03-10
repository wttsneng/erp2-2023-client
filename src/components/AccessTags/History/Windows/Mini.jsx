import React from "react";

import { DialogActions, DialogContent, Button } from "@mui/material";

import { MyWindow } from "@src/components/Basic";
import { AccessTagsHistoryTablesMini } from "@src/components/AccessTags";

import { useSelector, useDispatch } from "react-redux";
import {
  selectAccessTagsHistoryWindowsFieldOpen,
  setAccessTagsHistoryWindowsFieldOpen,
} from "@src/redux/slices/AccessTags/history/windows/field";
import { setAccessTagsEditingsNameSaveBlocked } from "@src/redux/slices/AccessTags/editings/name";
import { fetchAccessTagsHistoryDataField } from "@src/redux/slices/AccessTags/history/data/field";
import { selectAccessTagsHistoryFiltersField } from "@src/redux/slices/AccessTags/history/filters/field";
import { setAccessTagsEditingsDescriptionSaveBlocked } from "@src/redux/slices/AccessTags/editings/description";

const width = 500;
const height = 380;

const defaultLeftX = window.innerWidth / 2 - width / 2 - 20;
const defaultTopY = -window.innerHeight / 2 + height / 2 + 20;

function AccessTagsWindowsMiniHistoryWindow() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectAccessTagsHistoryWindowsFieldOpen);
  const filter = useSelector(selectAccessTagsHistoryFiltersField);

  const handleClose = () => {
    dispatch(setAccessTagsHistoryWindowsFieldOpen(false));
    dispatch(setAccessTagsEditingsNameSaveBlocked(false));
    dispatch(setAccessTagsEditingsDescriptionSaveBlocked(false));
  };
  React.useEffect(() => {
    if (isOpen) {
      dispatch(fetchAccessTagsHistoryDataField());
    }
  }, [filter, dispatch, isOpen]);

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
