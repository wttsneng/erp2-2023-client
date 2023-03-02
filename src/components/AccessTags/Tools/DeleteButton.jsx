import React from "react";

import { DeleteButton } from "@src/components/Basic";

import { useDispatch } from "react-redux";
import { setAccessTagsWarningsDeleteIsOpen } from "@src/redux/slices/AccessTags/warnings";

function AccessTagsToolsDeleteButton() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setAccessTagsWarningsDeleteIsOpen(true));
  };
  return <DeleteButton onClick={handleClick} />;
}
export default AccessTagsToolsDeleteButton;
