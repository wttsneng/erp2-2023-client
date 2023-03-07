import React from "react";

import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const AddButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{ width: { xs: "50%", md: "initial" } }}
    >
      <AddCircleOutlineIcon />
    </Button>
  );
};

export default AddButton;
