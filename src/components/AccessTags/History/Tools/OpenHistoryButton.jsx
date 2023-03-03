import React from "react";

import { HistoryButton } from "@src/components/Basic";

import { useDispatch } from "react-redux";
import { setAccessTagsHistoryWindowsMainOpen } from "@src/redux/slices/AccessTags/history/windows/main";
import { fetchAccessTagsHistoryDataMain } from "@src/redux/slices/AccessTags/history/data/main";
import { clearAccessTagsHistoryFilterMain } from "@src/redux/slices/AccessTags/history/filters/main";

function AccessTagsHistoryToolsOpenHistoryButton() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearAccessTagsHistoryFilterMain());
    dispatch(setAccessTagsHistoryWindowsMainOpen(true));
    fetchAccessTagsHistoryDataMain();
  };
  return <HistoryButton onClick={handleClick} />;
}
export default AccessTagsHistoryToolsOpenHistoryButton;
