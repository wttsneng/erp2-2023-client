import React from "react";

import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { useDispatch } from "react-redux";
import { clearAccessTagsInput } from "@src/redux/slices/AccessTags/input";
import { createAccessTag } from "@src/redux/slices/AccessTags/data";

function AccessTagsToolsAddButton() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearAccessTagsInput());
    createAccessTag({
      name: "New Access tag",
      description: "New description",
    });
  };
  return (
    <Button
      variant="contained"
      onClick={handleClick}
      sx={{ width: { xs: "50%", md: "initial" } }}
    >
      <AddCircleOutlineIcon />
    </Button>
  );
}
export default AccessTagsToolsAddButton;
