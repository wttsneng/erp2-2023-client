import React from "react";

import { RestoreButton } from "@src/components/Basic";

import { useDispatch, useSelector } from "react-redux";
import { clearAccessTagsInput } from "@src/redux/slices/AccessTags/input";
import { restoreAccessTag } from "@src/redux/slices/AccessTags/data";
import { selectAccessTagsTableSelected } from "@src/redux/slices/AccessTags/table";

function AccessTagsToolsRestoreButton() {
  const dispatch = useDispatch();
  const accessTagsTableSelected = useSelector(selectAccessTagsTableSelected);
  const handleClick = () => {
    dispatch(clearAccessTagsInput());
    accessTagsTableSelected.forEach(({ id }) => {
      restoreAccessTag({ itemId: id });
    });
  };
  return <RestoreButton onClick={handleClick} />;
}
export default AccessTagsToolsRestoreButton;
