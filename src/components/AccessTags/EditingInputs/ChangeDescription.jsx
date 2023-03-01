import React from "react";

import { SocketInput } from "@src/components/Basic";

import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTagsInputInitialDescription,
  setAccessTagsInputIsNameFocused,
  setAccessTagsInputIsDescriptionFocused,
  changeAccessTagsInputStarted,
  changeAccessTagsInputEnded,
  selectAccessTagsInputData,
  setAccessTagsInputDescription,
} from "@src/redux/slices/AccessTags/input";
import { fetchAccessTagsHistory } from "@src/redux/slices/AccessTags/history";
import { setAccessTagsFullHistoryFilterField } from "@src/redux/slices/AccessTags/fullHistoryFilter";
import { setAccessTagMiniHistoryWindowIsOpen } from "@src/redux/slices/AccessTags/miniHistoryWindow";
import { changeAccessTagValue } from "@src/redux/slices/AccessTags/data";

function AccessTagsEditingInputsChangeDescription() {
  const dispatch = useDispatch();
  const inputData = useSelector(selectAccessTagsInputData);

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

  const handleDescriptionHistoryClick = () => {
    if (!inputData.id) return;
    dispatch(setAccessTagsFullHistoryFilterField("description"));
    dispatch(setAccessTagMiniHistoryWindowIsOpen(true));
  };

  return (
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
  );
}

export default AccessTagsEditingInputsChangeDescription;
