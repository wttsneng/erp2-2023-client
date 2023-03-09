import React, { FC } from "react";

import { AddButton } from "@src/components/Basic";

import { socketEmitAccessTagsCreate } from "@src/socket/emits/AccessTags";

import { setAccessTagsToolsAddButtonClickHappened } from "@src/redux/slices/AccessTags/tools/addButton";
import { useAccessTagsDispatch } from "@src/hooks/accessTags/useAccessTagsRedux";

const AccessTagsToolsAddButton: FC = () => {
  const dispatch = useAccessTagsDispatch();
  const handleClick = () => {
    socketEmitAccessTagsCreate({
      name: "New tag",
      description: "New description",
    });
    dispatch(setAccessTagsToolsAddButtonClickHappened(true));
  };
  return <AddButton onClick={handleClick} />;
};
export default AccessTagsToolsAddButton;
