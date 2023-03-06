import React from "react";

import { HistoryButton } from "@src/components/Basic";

import { useDispatch } from "react-redux";
import { setAccessTagsHistoryWindowsMainOpen } from "@src/redux/slices/AccessTags/history/windows/main";

function AccessTagsHistoryToolsOpenHistoryButton() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setAccessTagsHistoryWindowsMainOpen(true));
  };
  return <HistoryButton onClick={handleClick} />;
}
export default AccessTagsHistoryToolsOpenHistoryButton;
