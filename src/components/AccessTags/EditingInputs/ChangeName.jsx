import React from "react";

import { SocketInput } from "@src/components/Basic";

import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTagsInputInitialName,
  setAccessTagsInputName,
  setAccessTagsInputIsNameFocused,
  setAccessTagsInputIsDescriptionFocused,
  changeAccessTagsInputStarted,
  changeAccessTagsInputEnded,
  selectAccessTagsInputData,
} from "@src/redux/slices/AccessTags/input";
import { fetchAccessTagsHistory } from "@src/redux/slices/AccessTags/history";
import { setAccessTagsFullHistoryFilterField } from "@src/redux/slices/AccessTags/fullHistoryFilter";
import { setAccessTagMiniHistoryWindowIsOpen } from "@src/redux/slices/AccessTags/miniHistoryWindow";
import { changeAccessTagValue } from "@src/redux/slices/AccessTags/data";

function AccessTagsEditingInputsChangeName() {
  const dispatch = useDispatch();
  const inputData = useSelector(selectAccessTagsInputData);

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
  const handleNameHistoryClick = () => {
    if (!inputData.id) return;
    dispatch(setAccessTagsFullHistoryFilterField("name"));
    dispatch(setAccessTagMiniHistoryWindowIsOpen(true));
  };

  return (
    <SocketInput
      label="name"
      disabled={inputData.isNameDisabled}
      value={inputData.name}
      onChange={handleNameChange}
      onBlur={handleNameBlur}
      onFocus={handleNameFocus}
      onHistoryClick={handleNameHistoryClick}
      isHistoryShow={inputData.isNameFocused}
    />
  );
}

export default AccessTagsEditingInputsChangeName;
