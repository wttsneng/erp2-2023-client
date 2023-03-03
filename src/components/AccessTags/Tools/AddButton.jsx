import React from "react";

import { AddButton } from "@src/components/Basic";

import { socketEmitAccessTagsCreate } from "@src/socket/emits/AccessTags";

function AccessTagsToolsAddButton() {
  const handleClick = () => {
    socketEmitAccessTagsCreate({
      name: "New tag",
      description: "New description",
    });
  };
  return <AddButton onClick={handleClick} />;
}
export default AccessTagsToolsAddButton;
