import React from "react";

import { DeleteButton } from "@src/components/Basic";

import { useDispatch } from "react-redux";
import { setAccessTagsWindowsWarningsDeleteOpen } from "@src/redux/slices/AccessTags/windows/warnings";

function AccessTagsToolsDeleteButton() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setAccessTagsWindowsWarningsDeleteOpen(true));
  };
  return <DeleteButton onClick={handleClick} />;
}
export default AccessTagsToolsDeleteButton;
