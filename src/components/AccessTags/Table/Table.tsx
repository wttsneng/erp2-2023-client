import React, { FC } from "react";
import { Box } from "@mui/material";
import { IAccessTags } from "@src/redux/slices/AccessTags/@types";

import AccessTagsTableTagList from "./TagList";
import AccessTagContextMenu from "../ContextMenu/ContextMenu";
import { useAccessTagsAddListener } from "@src/hooks/accessTags";

import {
  useAccessTagsDispatch,
  useAccessTagsSelector,
} from "@src/hooks/accessTags/useAccessTagsRedux";
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

const AccessTagsTable: FC = () => {
  const dispatch = useAccessTagsDispatch();

  const tagsFilters = useAccessTagsSelector(selectAccessTagsFiltersMain);
  const selectedTags = useAccessTagsSelector(selectAccessTagsSelected);
  const tagsStatus = useAccessTagsSelector(selectAccessTagsDataMainStatus);
  const tags = useAccessTagsSelector(selectAccessTagsDataMainData);

  const handleTagClick = (tag: IAccessTags) => {
    dispatch(
      dinamicallySetAccessTagsSelected({
        obj: tag,
        current: tags,
      })
    );
  };
  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
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
  useAccessTagsAddListener();

  return (
    <>
      <Box
        sx={{ height: "100%" }}
        onContextMenu={(e) => {
          handleContextMenu(e);
        }}
      >
        {tagsStatus === "success" && (
          <AccessTagsTableTagList
            arr={tags}
            selectedTags={selectedTags}
            onClick={handleTagClick}
          />
        )}
      </Box>
      <AccessTagContextMenu />
    </>
  );
};

export default AccessTagsTable;
