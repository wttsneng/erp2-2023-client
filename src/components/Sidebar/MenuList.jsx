import React from "react";
import MenuItem from "./MenuItem/index";
import MuiList from "@mui/material/List";
import { styled } from "@mui/material/styles";

export const List = styled(MuiList, {
  shouldForwardProp: (prop) => prop !== "isMini",
})(({ theme, isMini }) => ({
  padding: "0px 8px",
  ...(isMini && {
    padding: 0,
  }),
}));
function MenuList({ arr, ...props }) {
  return (
    <React.Fragment>
      <List isMini={props.isMini}>
        {arr.map((item) => (
          <MenuItem key={item.id} item={item} {...props} />
        ))}
      </List>
    </React.Fragment>
  );
}

export default MenuList;
