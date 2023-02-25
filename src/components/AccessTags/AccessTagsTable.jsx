import React from "react";
import { Box, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useTheme } from "@mui/material/styles";

import { TagsList, TagsListLoading } from "../Basic";

import { useSelector, useDispatch } from "react-redux";
import {
  selectAccessTagStatus,
  selectAccessTags,
} from "../../redux/slices/AccessTags/AccessTagsSlice";
import {
  multiAddRemoveSelectedAccessTag,
  selectAccessTagsTableSelected,
  setAccessTagsTableMode,
} from "../../redux/slices/AccessTags/AccessTagsTableSlice";
import {
  setAccessTagsInputId,
  clearAccessTagsInput,
  deleteAccessTag,
} from "../../redux/slices/AccessTags/AccessTagsInputSlice";

function AccessTagsTable() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [contextMenuAnchorEl, setContextMenuAnchorEl] = React.useState(null);
  const isContextMenuOpen = Boolean(contextMenuAnchorEl);

  const selectedTags = useSelector(selectAccessTagsTableSelected);
  const tagsStatus = useSelector(selectAccessTagStatus);
  const tags = useSelector(selectAccessTags);

  const handleTagClick = (tag) => {
    dispatch(setAccessTagsInputId(tag.id));
    dispatch(multiAddRemoveSelectedAccessTag(tag.id));
  };
  const handleTagContextMenu = (tag) => {
    setContextMenuAnchorEl(tag);
  };

  const handleDeleteClick = () => {
    dispatch(clearAccessTagsInput());
    selectedTags.forEach((id) => {
      deleteAccessTag({ itemId: id });
    });
  };

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Shift") {
        dispatch(setAccessTagsTableMode("multiMany"));
      }
      if (event.key === "Control") {
        dispatch(setAccessTagsTableMode("multiOne"));
      }
    };
    const handleKeyUp = (event) => {
      dispatch(setAccessTagsTableMode("single"));
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <Box>
      <Box
        sx={{
          border: `1px solid ${theme.palette.grey[400]}`,
          borderRadius: 1,
          paddingTop: 1,
          paddingX: 1,
          marginBlockStart: 2,
          minHeight: {
            xs: "calc(100vh - 400px)",
            md: "calc(100vh - 240px)",
          },
        }}
      >
        {tagsStatus === "success" ? (
          <TagsList
            arr={tags}
            selectedTags={selectedTags}
            onClick={handleTagClick}
            onContextMenu={handleTagContextMenu}
          />
        ) : tagsStatus === "idle" ? (
          <TagsListLoading />
        ) : null}
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={contextMenuAnchorEl}
        open={isContextMenuOpen}
        onClose={() => {
          setContextMenuAnchorEl(null);
        }}
      >
        <MenuItem
          onClick={() => {
            setContextMenuAnchorEl(null);
            handleDeleteClick();
          }}
        >
          <ListItemIcon>
            <DeleteOutlineIcon />
          </ListItemIcon>
          <ListItemText>Удалить</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default AccessTagsTable;
