import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";

function FullPaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} sx={{ minWidth: "900px" }} />
    </Draggable>
  );
}
function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

function DraggableWindow({ open, onClose, children, isFull }) {
  return (
    <Dialog
      open={open}
      onClose={(e, reason) => {
        if (reason === "backdropClick") return;
        onClose();
      }}
      hideBackdrop={true}
      PaperComponent={isFull ? FullPaperComponent : PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle
        style={{ cursor: "move" }}
        id="draggable-dialog-title"
      ></DialogTitle>
      <DialogContent sx={{ paddingY: 0, paddingX: 2, maxWidth: "100%" }}>
        {children}
      </DialogContent>
      <DialogActions sx={{ paddingY: 1 }}>
        <Button autoFocus onClick={onClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DraggableWindow;
