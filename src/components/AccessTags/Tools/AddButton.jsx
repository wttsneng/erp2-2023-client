import React from "react";

import { AddButton } from "@src/components/Basic";

import { createAccessTag } from "@src/redux/slices/AccessTags/data";

function AccessTagsToolsAddButton() {
  const handleClick = () => {
    createAccessTag({
      name: "New  tag",
      description: "New description",
    });
  };
  return <AddButton onClick={handleClick} />;
}
export default AccessTagsToolsAddButton;
