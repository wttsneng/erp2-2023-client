import React from "react";

import { Stack, DialogContent, DialogActions, Button } from "@mui/material";

import { MyWindow } from "@src/components/Basic";
import {
  setAccessTagsHistoryWindowsMainOpen,
  setAccessTagsHistoryWindowsMainHeight,
  selectAccessTagsHistoryWindowsMainWidth,
  selectAccessTagsHistoryWindowsMainOpen,
} from "@src/redux/slices/AccessTags/history/windows/main";
import { fetchAccessTagsHistoryDataMain } from "@src/redux/slices/AccessTags/history/data/main";
import {
  selectAccessTagsHistoryFiltersMainFilter,
  clearAccessTagsHistoryFilterMain,
} from "@src/redux/slices/AccessTags/history/filters/main";

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
  const isOpen = useSelector(selectAccessTagsHistoryWindowsMainOpen);
  const filter = useSelector(selectAccessTagsHistoryFiltersMainFilter);
  const currentWidth = useSelector(selectAccessTagsHistoryWindowsMainWidth);

  const handleClose = () => {
    dispatch(setAccessTagsHistoryWindowsMainOpen(false));
  };
  const handleResize = (e, { size }) => {
    dispatch(selectAccessTagsHistoryWindowsMainWidth(size.width));
    dispatch(setAccessTagsHistoryWindowsMainHeight(size.height));
  };

  React.useEffect(() => {
    dispatch(clearAccessTagsHistoryFilterMain());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(fetchAccessTagsHistoryDataMain());
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
