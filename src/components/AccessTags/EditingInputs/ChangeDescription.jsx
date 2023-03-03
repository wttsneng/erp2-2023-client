import React from "react";

import { SocketInput } from "@src/components/Basic";

import { useDispatch, useSelector } from "react-redux";

import { setAccessTagsFullHistoryFilterField } from "@src/redux/slices/AccessTags/history/filters/main";
import { setAccessTagsHistoryWindowsFieldOpen } from "@src/redux/slices/AccessTags/history/windows/field";
import { socketEmitAccessTagsChangeValue } from "@src/redux/slices/AccessTags/data/main";

function AccessTagsEditingInputsChangeDescription() {
  // const dispatch = useDispatch();
  // const inputData = useSelector(selectAccessTagsInputData);

  // const handleDescriptionChange = (value) => {
  //   dispatch(setAccessTagsInputDescription(value));
  // };

  // const handleDescriptionBlur = (value) => {
  //   dispatch(setAccessTagsInputInitialDescription(value));
  //   socketEmitAccessTagsInputEnded({
  //     itemId: inputData.id,
  //     attribute: "description",
  //   });
  //   if (inputData.initialDescription === value) return;
  //   socketEmitAccessTagsChangeValue({
  //     itemId: inputData.id,
  //     attribute: "description",
  //     value,
  //   });
  // };
  // const handleDescriptionFocus = () => {
  //   dispatch(setAccessTagsInputIsNameFocused(false));
  //   dispatch(setAccessTagsInputIsDescriptionFocused(true));
  //   socketEmitAccessTagsInputStarted({
  //     itemId: inputData.id,
  //     attribute: "description",
  //   });
  // };

  // const handleDescriptionHistoryClick = () => {
  //   if (!inputData.id) return;
  //   dispatch(setAccessTagsHistoryWindowsFieldOpen(true));
  // };

  return (
    <></>
    // <SocketInput
    //   disabled={inputData.isDescriptionDisabled}
    //   label="description"
    //   value={inputData.description}
    //   onChange={handleDescriptionChange}
    //   onBlur={handleDescriptionBlur}
    //   onFocus={handleDescriptionFocus}
    //   onHistoryClick={handleDescriptionHistoryClick}
    //   isHistoryShow={inputData.isDescriptionFocused}
    // />
  );
}

export default AccessTagsEditingInputsChangeDescription;
