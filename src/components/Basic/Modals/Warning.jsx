import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

function ModalsWarning({ open, onAgree, onDisagree, title, description }) {
  return (
    <Dialog open={open} onClose={onDisagree}>
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onDisagree}>Disagree</Button>
        <Button onClick={onAgree} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalsWarning;
