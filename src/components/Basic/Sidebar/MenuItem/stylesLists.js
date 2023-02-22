import MuiList from "@mui/material/List";
import MuiListItemButton from "@mui/material/ListItemButton";
import MuiListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";

const List = styled(MuiList, {
  shouldForwardProp: (prop) => prop !== "isMini",
})(({ theme, isMini }) => ({
  padding: "0px 0px 0px 8px",
  ...(isMini && {
    padding: "0px",
  }),
}));

const ListItemButton = styled(MuiListItemButton, {
  shouldForwardProp: (prop) => prop !== "isMini" && prop !== "isCircle",
})(({ theme, isMini, isCircle }) => ({
  borderRadius: "5px",
  // paddingBlockStart: "3px",
  // paddingBlockEnd: "3px",
  ...(isMini && {
    paddingLeft: "12px",
    paddingBlockStart: "7px",
    paddingBlockEnd: "7px",
  }),
  ...(isCircle &&
    isMini && {
      paddingBlockStart: "15px",
      paddingBlockEnd: "15px",
      paddingLeft: "13.5px",
    }),
  ...(isCircle &&
    !isMini && {
      paddingLeft: "17px",
    }),
}));

const ListItemText = styled(MuiListItemText, {
  shouldForwardProp: (prop) => prop !== "isMini" && prop !== "isCircle",
})(({ theme, isMini, isCircle }) => ({
  ...(isMini && {
    display: "none",
  }),
  ...(isCircle && {
    paddingLeft: "0px",
  }),
}));
export { List, ListItemButton, ListItemText };
