import React from "react";

import { MyWindow } from "@src/components/Basic";
import {
  selectAccessTagsFilterWindowIsOpen,
  setAccessTagsFilterWindowIsOpen,
} from "@src/redux/slices/AccessTags/filterWindow";
import { AccessTagsAllFilters } from "@src/components/AccessTags";

import { useSelector, useDispatch } from "react-redux";

function AccessTagsWindowsFilterWindow() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectAccessTagsFilterWindowIsOpen);
  const handleClose = () => {
    dispatch(setAccessTagsFilterWindowIsOpen(false));
  };
  const defaultLeftX = window.innerWidth / 2 - 200;
  const defaultTopY = -window.innerHeight / 2 + 250;
  return (
    <MyWindow
      open={isOpen}
      onClose={handleClose}
      defaultWidth={300}
      defaultHeight={420}
      defaultPosition={{ x: defaultLeftX, y: defaultTopY }}
    >
      <AccessTagsAllFilters />
    </MyWindow>
  );
}

export default AccessTagsWindowsFilterWindow;
