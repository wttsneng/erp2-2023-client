import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import TagsList from "../TagsList";

import { useSelector, useDispatch } from "react-redux";
import {
  selectAccessTagStatus,
  selectAccessTags,
} from "../../redux/slices/AccessTagsSlice";
import { setAccessTagsInputId } from "../../redux/slices/AccessTagsInputSlice";

function AccessTagsTable() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const tagsStatus = useSelector(selectAccessTagStatus);
  const tags = useSelector(selectAccessTags);
  const handleTagClick = (tag) => {
    dispatch(setAccessTagsInputId(tag.id));
  };

  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.grey[400]}`,
        borderRadius: 1,
        paddingTop: 1,
        paddingX: 1,
        marginBlockStart: 2,
      }}
    >
      {tagsStatus === "success" && (
        <TagsList arr={tags} onClick={handleTagClick} />
      )}
    </Box>
  );
}

export default AccessTagsTable;
