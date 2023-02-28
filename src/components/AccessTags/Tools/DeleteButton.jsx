import React from "react";
import { Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { useDispatch, useSelector } from "react-redux";
import { clearAccessTagsInput } from "@src/redux/slices/AccessTags/input";
import { deleteAccessTag } from "@src/redux/slices/AccessTags/data";
import { selectAccessTagsTableSelected } from "@src/redux/slices/AccessTags/table";

function AccessTagsToolsDeleteButton() {
  const dispatch = useDispatch();
  const accessTagsTableSelected = useSelector(selectAccessTagsTableSelected);
  const handleClick = () => {
    dispatch(clearAccessTagsInput());
    accessTagsTableSelected.forEach((id) => {
      deleteAccessTag({ itemId: id });
    });
  };
  return (
    <Button
      variant="contained"
      color="error"
      sx={{ width: { xs: "50%", md: "initial" } }}
      onClick={handleClick}
    >
      <DeleteOutlineIcon />
    </Button>
  );
}
export default AccessTagsToolsDeleteButton;
