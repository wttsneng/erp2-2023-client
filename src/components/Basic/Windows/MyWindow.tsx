import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import "react-resizable/css/styles.css";

import PaperComponent from "@src/components/Basic/Windows/PaperComponent";

const DialogTitle = styled(MuiDialogTitle)(({ theme }) => ({
  cursor: "move",
  padding: 0,
  marginBottom: theme.spacing(2),
  "&.MuiTypography-root": {
    padding: `0px ${theme.spacing(2)} 0px  ${theme.spacing(2)}}`,
    fontSize: "1.2rem",
  },
}));

const Dialog: any = styled(MuiDialog)(({}) => ({
  right: "unset",
  bottom: "unset",
  top: "-1000px",
  left: "-1000px",
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
}: any) => {
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
      onClose={(_: any, reason: string) => {
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
        onResize,
      }}
    >
      <DialogTitle className="dialog-header">{title}</DialogTitle>
      {{ ...children }}
    </Dialog>
  );
};

export default MyWindow;
