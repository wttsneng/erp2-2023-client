import React from "react";
import {
  Box,
  Pagination,
  Menu,
  MenuItem,
  Typography,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useTheme } from "@mui/material/styles";

import { TagsList, TagsListLoading } from "../Basic";

import { useSelector, useDispatch } from "react-redux";
import {
  selectAccessTagStatus,
  selectAccessTags,
} from "../../redux/slices/AccessTagsSlice";
import {
  multiAddRemoveSelectedAccessTag,
  selectAccessTagsTableSelected,
  setAccessTagsTableMode,
} from "../../redux/slices/AccessTagsTableSlice";
import {
  setAccessTagsInputId,
  clearAccessTagsInput,
  deleteAccessTag,
} from "../../redux/slices/AccessTagsInputSlice";
import { setAccessTagsPage } from "../../redux/slices/AccessTagsFilterSlice";

function AccessTagsTable() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [contextMenuAnchorEl, setContextMenuAnchorEl] = React.useState(null);
  const isContextMenuOpen = Boolean(contextMenuAnchorEl);

  const selectedTags = useSelector(selectAccessTagsTableSelected);
  const tagsStatus = useSelector(selectAccessTagStatus);
  const tags = useSelector(selectAccessTags);
  const tagsCount = useSelector((state) => state.accessTags.count);
  const tagsTotalPages = useSelector((state) => state.accessTags.totalPages);
  const page = useSelector((state) => state.accessTagsFilter.page);

  const handlePageChange = (event, value) => {
    dispatch(setAccessTagsPage(value));
  };

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
        }}
      >
        {tagsStatus === "success" ? (
          <TagsList
            arr={tags}
            selectedTags={selectedTags}
            onClick={handleTagClick}
            onContextMenu={handleTagContextMenu}
          />
        ) : tagsStatus === "loading" || tagsStatus === "idle" ? (
          <TagsListLoading />
        ) : null}
      </Box>

      <Box sx={{ position: "relative", marginBlockStart: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pagination
            count={tagsTotalPages}
            page={page}
            onChange={handlePageChange}
          />
        </Box>
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
          }}
        >
          Total count:{tagsCount}
        </Typography>
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
