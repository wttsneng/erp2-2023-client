import React, { FC } from "react";

import { RestoreButton } from "@src/components/Basic";

import { useAccessTagsSelector } from "@src/hooks/accessTags/useAccessTagsRedux";
import { socketEmitAccessTagsRestore } from "@src/socket/emits/AccessTags";
import { selectAccessTagsSelected } from "@src/redux/slices/AccessTags/selected";

const AccessTagsToolsRestoreButton: FC = () => {
  const accessTagsSelected = useAccessTagsSelector(selectAccessTagsSelected);
  const handleClick = () => {
    accessTagsSelected.forEach(({ id }) => {
      socketEmitAccessTagsRestore({ itemId: id });
    });
  };
  return <RestoreButton onClick={handleClick} />;
};
export default AccessTagsToolsRestoreButton;
