import React from "react";

import { MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function MenuItemDelete({ onClick }) {
  return (
    <MenuItem onClick={onClick}>
      <ListItemIcon>
        <DeleteOutlineIcon />
      </ListItemIcon>
      <ListItemText>Delete</ListItemText>
    </MenuItem>
  );
}

export default MenuItemDelete;
