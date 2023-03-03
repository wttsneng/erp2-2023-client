import React from "react";

import { Button } from "@mui/material";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";

function RestoreButton({ onClick }) {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ width: { xs: "50%", md: "initial" } }}
      onClick={onClick}
    >
      <RestoreFromTrashIcon />
    </Button>
  );
}

export default RestoreButton;
