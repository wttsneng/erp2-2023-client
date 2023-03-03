import React from "react";

import { Menu } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import {
  MenuItemDelete,
  MenuItemsRestore,
  MenuItemsAdd,
} from "@src/components/Basic";

import useAccessTagsDelete from "@src/hooks/accessTags/useAccessTagsDelete";
import useAccessTagsRestore from "@src/hooks/accessTags/useAccessTagsRestore";

import {
  selectContextMenuData,
  setContextMenuOpen,
} from "@src/redux/slices/Basic/contextMenuSlice";
import { socketEmitAccessTagsCreate } from "@src/socket/emits/AccessTags";

function AccessTagContextMenu() {
  const dispatch = useDispatch();
  const contextMenuData = useSelector(selectContextMenuData);

  const accessTagsDelete = useAccessTagsDelete();
  const accessTagsRestore = useAccessTagsRestore();

  const isDeleteEnabled = useSelector(
    (state) => state.accessTags.selected.deleteEnabled
  );
  const isRestoreEnabled = useSelector(
    (state) => state.accessTags.selected.restoreEnabled
  );

  const handleClose = () => {
    dispatch(setContextMenuOpen(false));
  };
  const handleDeleteClick = () => {
    accessTagsDelete();
    handleClose();
  };
  const handleRestoreClick = () => {
    accessTagsRestore();
    handleClose();
  };
  const handleAddClick = () => {
    socketEmitAccessTagsCreate({
      name: "New Access tag",
      description: "New description",
    });
    handleClose();
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
        {isDeleteEnabled && <MenuItemDelete onClick={handleDeleteClick} />}
        {isRestoreEnabled && <MenuItemsRestore onClick={handleRestoreClick} />}
        <MenuItemsAdd onClick={handleAddClick} />
      </Menu>
    </div>
  );
}

export default AccessTagContextMenu;
