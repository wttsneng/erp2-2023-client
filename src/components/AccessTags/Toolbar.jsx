import React from "react";
import { Stack } from "@mui/material";

import {
  AccessTagsToolsAddButton,
  AccessTagsToolsDeleteButton,
  AccessTagsToolsOpenHistoryButton,
} from "./Tools";

import { useDispatch, useSelector } from "react-redux";
import { setAccessTagsInputId } from "@src/redux/slices/AccessTags/input";
import { multiAddRemoveAccessTagsSelectedTag } from "@src/redux/slices/AccessTags/table";

function AccessTagsAddDelete() {
  const dispatch = useDispatch();
  const accessTagsAddedId = useSelector((state) => state.accessTags.addedId);

  React.useEffect(() => {
    if (accessTagsAddedId) {
      dispatch(setAccessTagsInputId(accessTagsAddedId));
      dispatch(multiAddRemoveAccessTagsSelectedTag(accessTagsAddedId));
    }
  }, [accessTagsAddedId, dispatch]);

  return (
    <div className="buttons">
      <Stack direction="row" spacing={2} sx={{ marginY: 2 }}>
        <AccessTagsToolsAddButton />
        <AccessTagsToolsDeleteButton />
        <AccessTagsToolsOpenHistoryButton />
      </Stack>
    </div>
  );
}

export default AccessTagsAddDelete;
