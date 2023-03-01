import React from "react";

import { MyWindow } from "@src/components/Basic";
import {
  selectAccessTagMiniHistoryWindowIsOpen,
  setAccessTagMiniHistoryWindowIsOpen,
} from "@src/redux/slices/AccessTags/miniHistoryWindow";

import { AccessTagsHistoryTablesMini } from "@src/components/AccessTags";

import { useSelector, useDispatch } from "react-redux";

const width = 500;
const height = 380;

function AccessTagsWindowsMiniHistoryWindow() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectAccessTagMiniHistoryWindowIsOpen);
  const handleClose = () => {
    dispatch(setAccessTagMiniHistoryWindowIsOpen(false));
  };

  const defaultLeftX = window.innerWidth / 2 - width / 2 - 20;
  const defaultTopY = -window.innerHeight / 2 + height / 2 + 20;
  return (
    <MyWindow
      open={isOpen}
      onClose={handleClose}
      defaultwidth={width}
      defaultheight={height}
      defaultposition={{ x: defaultLeftX, y: defaultTopY }}
    >
      <React.Fragment>
        <AccessTagsHistoryTablesMini />
      </React.Fragment>
    </MyWindow>
  );
}

export default AccessTagsWindowsMiniHistoryWindow;
