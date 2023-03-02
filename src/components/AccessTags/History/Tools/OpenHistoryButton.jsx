import React from "react";

import { HistoryButton } from "@src/components/Basic";

import { useDispatch } from "react-redux";
import { setAccessTagsFullHistoryWindowIsOpen } from "@src/redux/slices/AccessTags/fullHistoryWindow";
import { fetchAccessTagsHistory } from "@src/redux/slices/AccessTags/history";
import { clearAccessTagsFullHistoryFilter } from "@src/redux/slices/AccessTags/fullHistoryFilter";

function AccessTagsHistoryToolsOpenHistoryButton() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearAccessTagsFullHistoryFilter());
    dispatch(setAccessTagsFullHistoryWindowIsOpen(true));
    fetchAccessTagsHistory();
  };
  return <HistoryButton onClick={handleClick} />;
}
export default AccessTagsHistoryToolsOpenHistoryButton;
