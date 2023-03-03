import React from "react";

import { RestoreButton } from "@src/components/Basic";

import { useSelector } from "react-redux";
import { socketEmitAccessTagsRestore } from "@src/socket/emits/AccessTags";
import { selectAccessTagsSelected } from "@src/redux/slices/AccessTags/selected";

function AccessTagsToolsRestoreButton() {
  const accessTagsSelected = useSelector(selectAccessTagsSelected);
  const handleClick = () => {
    accessTagsSelected.forEach(({ id }) => {
      socketEmitAccessTagsRestore({ itemId: id });
    });
  };
  return <RestoreButton onClick={handleClick} />;
}
export default AccessTagsToolsRestoreButton;
