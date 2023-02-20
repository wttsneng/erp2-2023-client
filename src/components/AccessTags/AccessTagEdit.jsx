import React from "react";

import { Stack, Button } from "@mui/material";

import { SocketInput } from "../index";

import { useDispatch, useSelector } from "react-redux";
import {
  selectAccessTagsInputData,
  setAccessTagsInputName,
  setAccessTagsInputDescription,
  setAccessTagsInputIsDescriptionDisabled,
  setAccessTagsInputIsNameDisabled,
  setAccessTagsInputIsNameFocused,
  setAccessTagsInputIsDescriptionFocused,
  changeAccessTagValue,
  changeAccessTagsInputStarted,
  changeAccessTagsInputEnded,
  setAccessTagsInputInitialName,
  setAccessTagsInputInitialDescription,
  setAccessTagsInputMode,
  setAccessTagsInputId,
  createAccessTag,
} from "../../redux/slices/AccessTagsInputSlice";
import {
  selectAccessTags,
  selectAccessTagStatus,
} from "../../redux/slices/AccessTagsSlice";

function AccessTagInput() {
  const dispatch = useDispatch();
  const inputData = useSelector(selectAccessTagsInputData);
  const tags = useSelector(selectAccessTags);
  const tagsStatus = useSelector(selectAccessTagStatus);

  const inputNameRef = React.useRef();

  const handleNameChange = (value) => {
    dispatch(setAccessTagsInputName(value));
  };
  const handleNameBlur = (value) => {
    dispatch(setAccessTagsInputInitialName(value));
    if (inputData.mode === "create") return;
    changeAccessTagsInputEnded({ itemId: inputData.id, attribute: "name" });
    if (inputData.initialName === value) return;
    changeAccessTagValue({ itemId: inputData.id, attribute: "name", value });
  };
  const handleNameFocus = () => {
    dispatch(setAccessTagsInputIsDescriptionFocused(false));
    dispatch(setAccessTagsInputIsNameFocused(true));
    if (inputData.mode === "create") return;
    changeAccessTagsInputStarted({ itemId: inputData.id, attribute: "name" });
  };
  const handleDescriptionChange = (value) => {
    dispatch(setAccessTagsInputDescription(value));
  };
  const handleDescriptionBlur = (value) => {
    dispatch(setAccessTagsInputInitialDescription(value));
    if (inputData.mode === "create") return;
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
    if (inputData.mode === "create") return;
    changeAccessTagsInputStarted({
      itemId: inputData.id,
      attribute: "description",
    });
  };

  const handleAddTagClick = () => {
    dispatch(setAccessTagsInputMode("create"));
    if (inputData.id === null) {
      if (inputData.name === "" || inputData.description === "") return;
      console.log("Отправляю");
      createAccessTag({
        name: inputData.name,
        description: inputData.description,
      });
    }
  };

  React.useEffect(() => {
    if (!tagsStatus === "success") return;
    const currentTag = tags.find((tag) => tag.id === inputData.id);
    if (!currentTag) return;
    dispatch(setAccessTagsInputMode("edit"));
    dispatch(setAccessTagsInputName(currentTag.name));
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
  }, [inputData.id, tags, tagsStatus, dispatch]);
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
          onHistoryClick={() => {}}
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
          onHistoryClick={() => {}}
          isHistoryShow={inputData.isDescriptionFocused}
        />
      </Stack>
    </div>
  );
}

export default AccessTagInput;
