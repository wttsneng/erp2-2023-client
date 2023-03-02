import React from "react";
import { Snackbar, Alert } from "@mui/material";
function ErrorAlert({ open, position, message, onClose }) {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={2000}
      anchorOrigin={position}
    >
      <Alert onClose={onClose} severity="error">
        {message}
      </Alert>
    </Snackbar>
  );
}

export default ErrorAlert;
