import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Button } from "@mui/material";
import { SocketInput, DraggableWindow, HistoryTable } from "../components";
import {
  selectAccessTagsInputData,
  setAccessTagsInputName,
  setAccessTagsInputDescription,
  setAccessTagsInputIsDescriptionDisabled,
  setAccessTagsInputIsNameDisabled,
  setAccessTagsInputIsNameFocused,
  setAccessTagsInputIsDescriptionFocused,
  changeAccessTagValue,
  setAccessTagsInputMode,
} from "../redux/slices/AccessTagsInputSlice";
import { selectAccessTags } from "../redux/slices/AccessTagsSlice";

function AccessTagInput() {
  const dispatch = useDispatch();
  const inputData = useSelector(selectAccessTagsInputData);
  const tags = useSelector(selectAccessTags);

  const handleNameChange = (value) => {
    dispatch(setAccessTagsInputName(value));
  };
  const handleNameBlur = (value) => {
    //Доделать
    changeAccessTagValue({ itemId: inputData.id, attribute: "name", value });
  };
  const handleNameFocus = () => {
    dispatch(setAccessTagsInputIsDescriptionFocused(false));
    dispatch(setAccessTagsInputIsNameFocused(true));
  };
  const handleDescriptionChange = (value) => {
    dispatch(setAccessTagsInputDescription(value));
  };
  const handleDescriptionBlur = (value) => {
    //Доделать
    changeAccessTagValue({
      itemId: inputData.id,
      attribute: "description",
      value,
    });
  };
  const handleDescriptionFocus = () => {
    dispatch(setAccessTagsInputIsNameFocused(false));
    dispatch(setAccessTagsInputIsDescriptionFocused(true));
  };

  React.useEffect(() => {
    const currentTag = tags.find((tag) => tag.id === inputData.id);
    if (!currentTag) return;
    dispatch(setAccessTagsInputName(currentTag.name));
    dispatch(setAccessTagsInputDescription(currentTag.description));
    dispatch(
      setAccessTagsInputIsDescriptionDisabled(
        currentTag.edditingFields.includes("description")
      )
    );
    dispatch(
      setAccessTagsInputIsNameDisabled(
        currentTag.edditingFields.includes("name")
      )
    );
  }, [inputData.id, tags, dispatch]);
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
