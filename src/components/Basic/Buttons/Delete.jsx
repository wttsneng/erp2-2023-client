import React from "react";

import { Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function DeleteButton({ onClick }) {
  return (
    <Button
      variant="contained"
      color="error"
      sx={{ width: { xs: "50%", md: "initial" } }}
      onClick={onClick}
    >
      <DeleteOutlineIcon />
    </Button>
  );
}

export default DeleteButton;
