import React from "react";

import { MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function MenuItemsAdd({ onClick }) {
  return (
    <MenuItem onClick={onClick}>
      <ListItemIcon>
        <AddCircleOutlineIcon />
      </ListItemIcon>
      <ListItemText>Добавить</ListItemText>
    </MenuItem>
  );
}
export default MenuItemsAdd;
