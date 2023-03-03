import React from "react";

import { Button } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";

function HistoryButton({ onClick }) {
  return (
    <Button
      variant="contained"
      color="info"
      sx={{ width: { xs: "50%", md: "initial" } }}
      onClick={onClick}
    >
      <HistoryIcon />
    </Button>
  );
}

export default HistoryButton;
