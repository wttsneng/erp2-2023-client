import React from "react";

import { Stack } from "@mui/material";

import { SocketInput } from "../Basic";

import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTagsInputInitialName,
  setAccessTagsInputInitialDescription,
  setAccessTagsInputName,
  setAccessTagsInputDescription,
  setAccessTagsInputIsNameDisabled,
  setAccessTagsInputIsDescriptionDisabled,
  setAccessTagsInputIsNameFocused,
  setAccessTagsInputIsDescriptionFocused,
  changeAccessTagsInputStarted,
  changeAccessTagsInputEnded,
  selectAccessTagsInputData,
} from "@src/redux/slices/AccessTags/input";
import { fetchAccessTagsHistory } from "@src/redux/slices/AccessTags/history";
import {
  selectAccessTagsData,
  selectAccessTagsStatus,
  changeAccessTagValue,
} from "@src/redux/slices/AccessTags/data";
import {
  setAccessTagsHistoryWindowOpen,
  setAccessTagsHistoryWindowMode,
} from "@src/redux/slices/AccessTags/historyWindow";
import {
  setAccessTagsHistoryField,
  setAccessTagsTagHistoryId,
} from "@src/redux/slices/AccessTags/historyFilter";

function AccessTagInput() {
  const dispatch = useDispatch();
  const inputData = useSelector(selectAccessTagsInputData);
  const tags = useSelector(selectAccessTagsData);
  const tagsStatus = useSelector(selectAccessTagsStatus);

  const inputNameRef = React.createRef();

  const handleNameChange = (value) => {
    dispatch(setAccessTagsInputName(value));
  };
  const handleNameBlur = (value) => {
    dispatch(setAccessTagsInputInitialName(value));
    changeAccessTagsInputEnded({ itemId: inputData.id, attribute: "name" });
    if (inputData.initialName === value) return;
    changeAccessTagValue({ itemId: inputData.id, attribute: "name", value });
  };
  const handleNameFocus = () => {
    dispatch(setAccessTagsInputIsDescriptionFocused(false));
    dispatch(setAccessTagsInputIsNameFocused(true));
    changeAccessTagsInputStarted({ itemId: inputData.id, attribute: "name" });
  };
  const handleDescriptionChange = (value) => {
    dispatch(setAccessTagsInputDescription(value));
  };
  const handleDescriptionBlur = (value) => {
    dispatch(setAccessTagsInputInitialDescription(value));
    changeAccessTagsInputEnded({
      itemId: inputData.id,
      attribute: "description",
    });
    if (inputData.initialDescription === value) return;
    changeAccessTagValue({
      itemId: inputData.id,
      attribute: "description",
      value,
    });
  };
  const handleDescriptionFocus = () => {
    dispatch(setAccessTagsInputIsNameFocused(false));
    dispatch(setAccessTagsInputIsDescriptionFocused(true));
    changeAccessTagsInputStarted({
      itemId: inputData.id,
      attribute: "description",
    });
  };
  const handleNameHistoryClick = () => {
    if (!inputData.id) return;
    dispatch(setAccessTagsHistoryWindowMode("mini"));
    dispatch(fetchAccessTagsHistory()).then(() => {
      dispatch(setAccessTagsHistoryField("name"));
      dispatch(setAccessTagsHistoryWindowOpen(true));
    });
  };
  const handleDescriptionHistoryClick = () => {
    if (!inputData.id) return;
    dispatch(setAccessTagsHistoryWindowMode("mini"));
    dispatch(fetchAccessTagsHistory()).then(() => {
      dispatch(setAccessTagsHistoryField("description"));
      dispatch(setAccessTagsHistoryWindowOpen(true));
    });
  };

  React.useEffect(() => {
    if (tagsStatus !== "success") return;
    const currentTag = tags.find((tag) => tag.id === inputData.id);
    if (!currentTag) return;
    dispatch(setAccessTagsInputName(currentTag.name));
    dispatch(setAccessTagsTagHistoryId(inputData.id));
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
    inputNameRef.current.querySelector("input")?.focus();
  }, [inputData.id, tagsStatus, tags, dispatch]);

  return (
    <div>
      <Stack spacing={2}>
        <SocketInput
          label="name"
          disabled={inputData.isNameDisabled}
          value={inputData.name}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          onFocus={handleNameFocus}
          onHistoryClick={handleNameHistoryClick}
          isHistoryShow={inputData.isNameFocused}
          ref={inputNameRef}
        />
        <SocketInput
          disabled={inputData.isDescriptionDisabled}
          label="description"
          value={inputData.description}
          onChange={handleDescriptionChange}
          onBlur={handleDescriptionBlur}
          onFocus={handleDescriptionFocus}
          onHistoryClick={handleDescriptionHistoryClick}
          isHistoryShow={inputData.isDescriptionFocused}
        />
      </Stack>
    </div>
  );
}

export default AccessTagInput;