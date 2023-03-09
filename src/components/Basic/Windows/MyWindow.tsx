import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import "react-resizable/css/styles.css";

import PaperComponent from "@src/components/Basic/Windows/PaperComponent";

interface MyWindowProps {
  open: boolean;
  children: any;
  onClose: () => void;
  onResize?: (width: number, height: number) => void;
  defaultwidth?: number;
  defaultheight?: number;
  minconstraints?: { width: number; height: number };
  maxconstraints?: { width: number; height: number };
  defaultposition?: { x: number; y: number };
  isModal?: boolean;
  withoutBackdrop?: boolean;
  title?: string;
}

const DialogTitle = styled(MuiDialogTitle)(({ theme }) => ({
  cursor: "move",
  padding: 0,
  marginBottom: theme.spacing(2),
  "&.MuiTypography-root": {
    padding: `0px ${theme.spacing(2)} 0px  ${theme.spacing(2)}}`,
    fontSize: "1.2rem",
  },
}));

const Dialog = styled(MuiDialog, {
  shouldForwardProp: (props) => props !== "isModal",
})(({ isModal }: { isModal?: boolean }) => ({
  right: isModal ? "0px" : "unset",
  bottom: isModal ? "0px" : "unset",
  top: isModal ? "0px" : "-1000px",
  left: isModal ? "0px" : "-1000px",
}));

const MyWindow = ({
  open,
  children,
  onClose,
  onResize,
  defaultwidth,
  defaultheight,
  minconstraints,
  maxconstraints,
  defaultposition,
  isModal,
  withoutBackdrop,
  title,
}: MyWindowProps) => {
  if (!defaultwidth) defaultwidth = 320;
  if (!defaultheight) defaultheight = 380;
  if (!defaultposition) defaultposition = { x: 0, y: 0 };
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
      onClose={(_, reason) => {
        if (reason === "backdropClick" && !isModal) return;
        onClose();
      }}
      PaperComponent={PaperComponent}
      PaperProps={
        {
          defaultwidth: width,
          defaultheight: height,
          minconstraints,
          maxconstraints,
          position,
          onresize: onResize,
        } as any
      }
    >
      <DialogTitle className="dialog-header">{title}</DialogTitle>
      {{ ...children }}
    </Dialog>
  );
};

export default MyWindow;
