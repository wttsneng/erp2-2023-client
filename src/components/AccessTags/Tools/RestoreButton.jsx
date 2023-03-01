import React from "react";
import { Button } from "@mui/material";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";

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
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ width: { xs: "50%", md: "initial" } }}
      onClick={handleClick}
    >
      <RestoreFromTrashIcon />
    </Button>
  );
}
export default AccessTagsToolsRestoreButton;
