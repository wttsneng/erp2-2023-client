import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { TagsList, TagsListLoading } from "../Basic";

import { useSelector, useDispatch } from "react-redux";
import {
  selectAccessTagsStatus,
  selectAccessTagsData,
} from "@src/redux/slices/AccessTags/data";
import {
  selectAccessTagsTableSelected,
  multiAddRemoveAccessTagsSelectedTag,
} from "@src/redux/slices/AccessTags/table";
import { setAccessTagsInputId } from "@src/redux/slices/AccessTags/input";
import {
  setContextMenuOpen,
  setContextMenuType,
  setContextMenuPosition,
} from "@src/redux/slices/Basic/contextMenuSlice";
import { fetchAccessTags } from "@src/redux/slices/AccessTags/data";
import { selectAccessTagsFilters } from "@src/redux/slices/AccessTags/filter";

function AccessTagsTable() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const tagsFilters = useSelector(selectAccessTagsFilters);

  const selectedTags = useSelector(selectAccessTagsTableSelected);
  const tagsStatus = useSelector(selectAccessTagsStatus);
  const tags = useSelector(selectAccessTagsData);

  const handleTagClick = (tag) => {
    dispatch(setAccessTagsInputId(tag.id));
    dispatch(multiAddRemoveAccessTagsSelectedTag(tag.id));
  };

  React.useEffect(() => {
    dispatch(fetchAccessTags(tagsFilters));
  }, [tagsFilters, dispatch]);

  return (
    <Box>
      <Box
        onContextMenu={(e) => {
          e.preventDefault();
          dispatch(setContextMenuOpen(true));
          dispatch(setContextMenuType("access_tag_table"));
          dispatch(setContextMenuPosition({ x: e.clientX, y: e.clientY }));
        }}
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
          />
        ) : tagsStatus === "idle" ? (
          <TagsListLoading />
        ) : null}
      </Box>
    </Box>
  );
}

export default AccessTagsTable;
