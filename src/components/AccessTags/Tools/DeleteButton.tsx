import React, { FC } from "react";

import { DeleteButton } from "@src/components/Basic";

import { useAccessTagsDispatch } from "@src/hooks/accessTags/useAccessTagsRedux";

import { setAccessTagsWindowsWarningsDeleteOpen } from "@src/redux/slices/AccessTags/windows/warnings";

const AccessTagsToolsDeleteButton: FC = () => {
  const dispatch = useAccessTagsDispatch();
  const handleClick = () => {
    dispatch(setAccessTagsWindowsWarningsDeleteOpen(true));
  };
  return <DeleteButton onClick={handleClick} />;
};
export default AccessTagsToolsDeleteButton;
