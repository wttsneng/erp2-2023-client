import React, { FC } from "react";

import { DeleteButton } from "@src/components/Basic";

import { useDispatch } from "react-redux";
import { setAccessTagsWindowsWarningsDeleteOpen } from "@src/redux/slices/AccessTags/windows/warnings";

const AccessTagsToolsDeleteButton: FC = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setAccessTagsWindowsWarningsDeleteOpen(true));
  };
  return <DeleteButton onClick={handleClick} />;
};
export default AccessTagsToolsDeleteButton;
