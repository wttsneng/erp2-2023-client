import React, { FC } from "react";

import { AddButton } from "@src/components/Basic";

import { socketEmitAccessTagsCreate } from "@src/socket/emits/AccessTags";

const AccessTagsToolsAddButton: FC = () => {
  const handleClick = () => {
    socketEmitAccessTagsCreate({
      name: "New tag",
      description: "New description",
    });
  };
  return <AddButton onClick={handleClick} />;
};
export default AccessTagsToolsAddButton;
