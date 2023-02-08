import { Snackbar, Alert } from "@mui/material";
import React from "react";

function MySnackbar({
  open = true,
  message = "",
  onClose = null,
  anchorOrigin = { vertical: "top", horizontal: "right" },
  autoHideDuration = 2000,
  severity,
  ...args
}) {
  const [isOpen, setIsOpen] = React.useState(open);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsOpen(false);
  };
  return (
    <Snackbar
      open={onClose ? open : isOpen}
      autoHideDuration={autoHideDuration}
      anchorOrigin={anchorOrigin}
      onClose={onClose ? onClose : handleClose}
      message={severity ? null : message}
      {...args}
    >
      {severity && (
        <Alert onClose={onClose ? handleClose : onClose} severity={severity}>
          {message}
        </Alert>
      )}
    </Snackbar>
  );
}

export default MySnackbar;
