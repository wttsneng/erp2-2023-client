import React from "react";

import { Stack } from "@mui/material";

import {
  AccessTagsEditingInputsChangeDescription,
  AccessTagsEditingInputsChangeName,
} from "@src/components/AccessTags";

import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTagsInputInitialName,
  setAccessTagsInputInitialDescription,
  setAccessTagsInputName,
  setAccessTagsInputDescription,
  setAccessTagsInputIsNameDisabled,
  setAccessTagsInputIsDescriptionDisabled,
  selectAccessTagsInputData,
} from "@src/redux/slices/AccessTags/input";
import {
  selectAccessTagsData,
  selectAccessTagsStatus,
} from "@src/redux/slices/AccessTags/data";
import { setAccessTagsFullHistoryFilterId } from "@src/redux/slices/AccessTags/fullHistoryFilter";

function AccessTagInput() {
  const dispatch = useDispatch();
  const inputData = useSelector(selectAccessTagsInputData);
  const tags = useSelector(selectAccessTagsData);
  const tagsStatus = useSelector(selectAccessTagsStatus);

  React.useEffect(() => {
    if (tagsStatus !== "success") return;
    const currentTag = tags.find((tag) => tag.id === inputData.id);
    if (!currentTag) return;
    dispatch(setAccessTagsInputName(currentTag.name));
    dispatch(setAccessTagsFullHistoryFilterId(inputData.id));
    dispatch(setAccessTagsInputDescription(currentTag.description));
    dispatch(setAccessTagsInputInitialName(currentTag.name));
    dispatch(setAccessTagsInputInitialDescription(currentTag.description));
    dispatch(
      setAccessTagsInputIsDescriptionDisabled(
        currentTag.editingFields.includes("description")
      )
    );
    dispatch(
      setAccessTagsInputIsNameDisabled(
        currentTag.editingFields.includes("name")
      )
    );
  }, [inputData.id, tagsStatus, tags, dispatch]);

  return (
    <div>
      <Stack spacing={2}>
        <AccessTagsEditingInputsChangeName />
        <AccessTagsEditingInputsChangeDescription />
      </Stack>
    </div>
  );
}

export default AccessTagInput;
