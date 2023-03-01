import React from "react";

import { Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useSelector, useDispatch } from "react-redux";
import {
  selectContextMenuData,
  setContextMenuOpen,
} from "@src/redux/slices/Basic/contextMenuSlice";
import {
  createAccessTag,
  deleteAccessTag,
  restoreAccessTag,
} from "@src/redux/slices/AccessTags/data";
import { selectAccessTagsTableSelected } from "@src/redux/slices/AccessTags/table";
import { clearAccessTagsInput } from "@src/redux/slices/AccessTags/input";

function AccessTagContextMenu() {
  const dispatch = useDispatch();
  const contextMenuData = useSelector(selectContextMenuData);
  const selectedTags = useSelector(selectAccessTagsTableSelected);
  const isDeleteEnabled = useSelector(
    (state) => state.accessTags.table.deleteEnabled
  );
  const isRestoreEnabled = useSelector(
    (state) => state.accessTags.table.restoreEnabled
  );
  const handleClose = () => {
    dispatch(setContextMenuOpen(false));
  };
  const handleDeleteClick = () => {
    dispatch(clearAccessTagsInput());
    selectedTags.forEach(({ id }) => {
      deleteAccessTag({ itemId: id });
    });
  };
  const handleRestoreClick = () => {
    selectedTags.forEach(({ id }) => {
      restoreAccessTag({ itemId: id });
    });
  };
  const handleAddClick = () => {
    dispatch(clearAccessTagsInput());
    createAccessTag({
      name: "New Access tag",
      description: "New description",
    });
  };
  if (contextMenuData.type !== "access_tag_table") return null;
  return (
    <div>
      <Menu
        open={contextMenuData.isOpen}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenuData.position !== null
            ? {
                top: contextMenuData.position.y,
                left: contextMenuData.position.x,
              }
            : undefined
        }
      >
        {isDeleteEnabled && (
          <MenuItem
            onClick={() => {
              handleDeleteClick();
              handleClose();
            }}
          >
            <ListItemIcon>
              <DeleteOutlineIcon />
            </ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
        )}
        {isRestoreEnabled && (
          <MenuItem
            onClick={() => {
              handleRestoreClick();
              handleClose();
            }}
          >
            <ListItemIcon>
              <RestoreFromTrashIcon />
            </ListItemIcon>
            <ListItemText>Restore</ListItemText>
          </MenuItem>
        )}

        <MenuItem
          onClick={() => {
            handleAddClick();
            handleClose();
          }}
        >
          <ListItemIcon>
            <AddCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText>Добавить</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default AccessTagContextMenu;
