import { useState } from "react";
import {
  Dialog as MuiDialog,
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

const Dialog = styled(MuiDialog, {
  shouldForwardProp: (prop) => prop !== "isModal",
})(({ theme, isModal }) => ({
  right: isModal ? "0px" : "unset",
  bottom: isModal ? "0px" : "unset",
  top: isModal ? "0px" : "-1000px",
  left: isModal ? "0px" : "-1000px",
}));

const PaperComponent = (props) => {
  const [width, setWidth] = useState(props.defaultwidth);
  const [height, setHeight] = useState(props.defaultheight);

  const handleResize = (event, { size }) => {
    setWidth(size.width);
    setHeight(size.height);
  };
  const minConstraints = props.minconstraints || [300, 400];
  const maxConstraints = props.maxconstraints || [Infinity, Infinity];

  return (
    <Draggable handle=".dialog-header" defaultPosition={props.position}>
      <ResizableBox
        width={width}
        height={height}
        minConstraints={minConstraints}
        maxConstraints={maxConstraints}
        onResize={handleResize}
        className="resizable-box"
        resizeHandles={["se"]}
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
  defaultwidth,
  defaultheight,
  minconstraints,
  maxconstraints,
  defaultposition,
  isModal,
  withoutBackdrop,
}) => {
  const width =
    defaultwidth > window.innerWidth ? window.innerWidth - 20 : defaultwidth;
  const height =
    defaultheight > window.innerHeight
      ? window.innerHeight - 20
      : defaultheight;
  const positionX =
    defaultwidth > window.innerWidth
      ? 1000 + window.innerWidth / 2 - width / 2
      : defaultposition.x + 1000 + window.innerWidth / 2 - width / 2;
  const positionY =
    defaultheight > window.innerHeight
      ? 1000 + window.innerHeight / 2 - height / 2
      : defaultposition.y + 1000 + window.innerHeight / 2 - height / 2;
  const position = isModal
    ? { x: 0, y: 0 }
    : {
        x: positionX,
        y: positionY,
      };

  return (
    <Dialog
      hideBackdrop={!isModal || withoutBackdrop}
      open={open}
      onClose={(e, reason) => {
        if (reason === "backdropClick" && !isModal) return;
        onClose();
      }}
      isModal={isModal}
      PaperComponent={PaperComponent}
      PaperProps={{
        defaultwidth: width,
        defaultheight: height,
        minconstraints,
        maxconstraints,
        position,
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
