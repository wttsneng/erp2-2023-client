import React from "react";
import StyledBox from "./StyledBox";
import { Box } from "@mui/material";

import { TagsList, TagsListLoading } from "../../Basic";
import AccessTagContextMenu from "../ContextMenu";

import { useSelector, useDispatch } from "react-redux";
import {
  selectAccessTagsDataMainStatus,
  selectAccessTagsDataMainData,
} from "@src/redux/slices/AccessTags/data/main";
import {
  selectAccessTagsSelected,
  dinamicallySetAccessTagsSelected,
} from "@src/redux/slices/AccessTags/selected";

import { setContextMenu } from "@src/redux/slices/Basic/contextMenuSlice";
import { fetchAccessTagsDataMain } from "@src/redux/slices/AccessTags/data/main";
import { selectAccessTagsFiltersMain } from "@src/redux/slices/AccessTags/filters/main";

function AccessTagsTable() {
  const dispatch = useDispatch();

  const tagsFilters = useSelector(selectAccessTagsFiltersMain);
  const selectedTags = useSelector(selectAccessTagsSelected);
  const tagsStatus = useSelector(selectAccessTagsDataMainStatus);
  const tags = useSelector(selectAccessTagsDataMainData);

  const handleTagClick = (tag) => {
    dispatch(
      dinamicallySetAccessTagsSelected({
        obj: tag,
        current: tags,
      })
    );
  };
  const handleContextMenu = (e) => {
    e.preventDefault();
    dispatch(
      setContextMenu({
        isOpen: true,
        type: "access_tag_table",
        position: { x: e.clientX, y: e.clientY },
      })
    );
  };

  React.useEffect(() => {
    dispatch(fetchAccessTagsDataMain(tagsFilters));
  }, [tagsFilters, dispatch]);

  return (
    <Box>
      <StyledBox onContextMenu={handleContextMenu}>
        {tagsStatus === "success" ? (
          <TagsList
            arr={tags}
            selectedTags={selectedTags}
            onClick={handleTagClick}
          />
        ) : tagsStatus === "idle" ? (
          <TagsListLoading />
        ) : null}
      </StyledBox>
      <AccessTagContextMenu />
    </Box>
  );
}

export default AccessTagsTable;
