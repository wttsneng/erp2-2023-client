import React from "react";

import { MyWindow } from "@src/components/Basic";
import {
  selectAccessTagsFilterWindowIsOpen,
  setAccessTagsFilterWindowIsOpen,
} from "@src/redux/slices/AccessTags/filterWindow";
import { AccessTagsAllFilters } from "@src/components/AccessTags";

import { useSelector, useDispatch } from "react-redux";

const width = 300;
const height = 380;
function AccessTagsWindowsFilterWindow() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectAccessTagsFilterWindowIsOpen);
  const handleClose = () => {
    dispatch(setAccessTagsFilterWindowIsOpen(false));
  };
  const defaultLeftX = window.innerWidth / 2 - width / 2 - 20;
  const defaultTopY = -window.innerHeight / 2 + height / 2 + 20;
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
      <AccessTagsAllFilters />
    </MyWindow>
  );
}

export default AccessTagsWindowsFilterWindow;
