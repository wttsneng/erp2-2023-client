import React from "react";

import { Stack, DialogContent, DialogActions, Button } from "@mui/material";

import { MyWindow } from "@src/components/Basic";
import {
  selectAccessTagsFullHistoryWindowIsOpen,
  setAccessTagsFullHistoryWindowIsOpen,
  setAccessTagsFullHistoryWindowWidth,
  setAccessTagsFullHistoryWindowHeight,
  selectAccessTagsFullHistoryWindowWidth,
} from "@src/redux/slices/AccessTags/fullHistoryWindow";
import { fetchAccessTagsHistory } from "@src/redux/slices/AccessTags/history";
import {
  selectAccessTagsFullHistoryFilter,
  clearAccessTagsFullHistoryFilter,
} from "@src/redux/slices/AccessTags/fullHistoryFilter";

import {
  AccessTagsHistoryFiltersSearch,
  AccessTagsHistoryTablesFull,
  AccessTagsHistoryFiltersAutoComplete,
  AccessTagsHostoryTablesMobileFull,
} from "@src/components/AccessTags";

import { useSelector, useDispatch } from "react-redux";

const width = 1000;
const height = 600;
const defaultLeftX = 0;
const defaultTopY = 0;

function AccessTagsWindowsFullHistoryWindow() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectAccessTagsFullHistoryWindowIsOpen);
  const filter = useSelector(selectAccessTagsFullHistoryFilter);
  const currentWidth = useSelector(selectAccessTagsFullHistoryWindowWidth);

  const handleClose = () => {
    dispatch(setAccessTagsFullHistoryWindowIsOpen(false));
  };
  const handleResize = (e, { size }) => {
    dispatch(setAccessTagsFullHistoryWindowWidth(size.width));
    dispatch(setAccessTagsFullHistoryWindowHeight(size.height));
  };

  React.useEffect(() => {
    dispatch(clearAccessTagsFullHistoryFilter());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(fetchAccessTagsHistory());
  }, [filter, dispatch]);
  return (
    <MyWindow
      open={isOpen}
      onClose={handleClose}
      defaultwidth={width}
      defaultheight={height}
      onResize={handleResize}
      defaultposition={{ x: defaultLeftX, y: defaultTopY }}
    >
      <React.Fragment>
        <DialogContent sx={{ paddingX: 2, paddingY: 0, overflowY: "hidden" }}>
          <Stack spacing={2} sx={{ height: "100%" }}>
            <AccessTagsHistoryFiltersSearch />
            <AccessTagsHistoryFiltersAutoComplete />
            <AccessTagsHostoryTablesMobileFull />
            {currentWidth < 900 ? null : <AccessTagsHistoryTablesFull />}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </React.Fragment>
    </MyWindow>
  );
}

export default AccessTagsWindowsFullHistoryWindow;
