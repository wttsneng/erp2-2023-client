import React from "react";

import { MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";

function MenuItemsRestore({ onClick }) {
  return (
    <MenuItem onClick={onClick}>
      <ListItemIcon>
        <RestoreFromTrashIcon />
      </ListItemIcon>
      <ListItemText>Restore</ListItemText>
    </MenuItem>
  );
}

export default MenuItemsRestore;
