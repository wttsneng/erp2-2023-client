import { useState } from "react";
import {
  Dialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  Paper,
  DialogActions,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ResizableBox } from "react-resizable";
import Draggable from "react-draggable";
import "react-resizable/css/styles.css";

const DialogTitle = styled(MuiDialogTitle)(({ theme }) => ({
  cursor: "move",
  padding: 0,
  marginBottom: theme.spacing(2),
  "&.MuiTypography-root": {
    padding: `0px ${theme.spacing(2)} 0px  ${theme.spacing(2)}}`,
    fontSize: "1.2rem",
  },
}));

const DialogContent = styled(MuiDialogContent)(({ theme }) => ({
  padding: `${theme.spacing(2)}}`,
}));

const PaperComponent = (props) => {
  console.log(props.defaultPosition);
  const [width, setWidth] = useState(props.defaultWidth);
  const [height, setHeight] = useState(props.defaultHeight);

  const handleResize = (event, { size }) => {
    setWidth(size.width);
    setHeight(size.height);
  };
  const minConstraints = props.minConstraints || [300, 400];
  const maxConstraints = props.maxConstraints || [Infinity, Infinity];

  return (
    <Draggable handle=".dialog-header" defaultPosition={props.defaultPosition}>
      <ResizableBox
        width={width}
        height={height}
        minConstraints={minConstraints}
        maxConstraints={maxConstraints}
        onResize={handleResize}
        className="resizable-box"
        ResizeHandleAxis="both"
      >
        <Paper
          sx={{
            width: "100%",
            height: "100% !important",
            minWidth: "100%",
            minHeight: "100%",
            margin: "0px !important",
            padding: 0,
          }}
          elevation={0}
          {...props}
        />
      </ResizableBox>
    </Draggable>
  );
};

const ResizableDialog = ({
  open,
  onClose,
  title,
  children,
  defaultWidth,
  defaultHeight,
  minConstraints,
  maxConstraints,
  defaultPosition,
}) => {
  return (
    <Dialog
      hideBackdrop
      open={open}
      onClose={(e, reason) => {
        if (reason === "backdropClick") return;
        onClose();
      }}
      PaperComponent={PaperComponent}
      PaperProps={{
        defaultWidth: defaultWidth,
        defaultHeight: defaultHeight,
        minConstraints: minConstraints,
        maxConstraints: maxConstraints,
        defaultPosition: defaultPosition,
      }}
    >
      <DialogTitle className="dialog-header">{title}</DialogTitle>
      <DialogContent>{{ ...children }}</DialogContent>
      <DialogActions sx={{ paddingY: 1 }}>
        <Button autoFocus onClick={onClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ResizableDialog;
