import React from "react";

import { MyWindow } from "@src/components/Basic";
import {
  selectAccessTagsFilterWindowIsOpen,
  setAccessTagsWindowsFilterOpen,
} from "@src/redux/slices/AccessTags/windows/filter";
import { DialogActions, DialogContent, Button } from "@mui/material";
import { AccessTagsAllFilters } from "@src/components/AccessTags";
import { clearAccessTagsMainFilter } from "@src/redux/slices/AccessTags/filters/main";

import { useSelector, useDispatch } from "react-redux";
import { useAccessTagsTranslation } from "@src/hooks/accessTags";

const width = 320;
const height = 380;
const defaultLeftX = window.innerWidth / 2 - width / 2 - 20;
const defaultTopY = -window.innerHeight / 2 + height / 2 + 20;

function AccessTagsWindowsFilterWindow() {
  const dispatch = useDispatch();
  const { t } = useAccessTagsTranslation();
  const isOpen = useSelector(selectAccessTagsFilterWindowIsOpen);

  const handleClose = () => {
    dispatch(setAccessTagsWindowsFilterOpen(false));
  };
  const handleClearFilters = () => {
    dispatch(clearAccessTagsMainFilter());
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
          <Button onClick={handleClearFilters}>
            {t("filters.clearFilters")}
          </Button>
          <Button onClick={handleClose}>{t("ui.close")}</Button>
        </DialogActions>
      </React.Fragment>
    </MyWindow>
  );
}

export default AccessTagsWindowsFilterWindow;
