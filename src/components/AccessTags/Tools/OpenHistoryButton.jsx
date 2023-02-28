import React from "react";

import { Button } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";

import { useDispatch } from "react-redux";
import {
  setAccessTagsHistoryWindowMode,
  setAccessTagsHistoryWindowOpen,
} from "@src/redux/slices/AccessTags/historyWindow";
import { fetchAccessTagsHistory } from "@src/redux/slices/AccessTags/history";
import { clearAccessTagsHistoryFilter } from "@src/redux/slices/AccessTags/historyFilter";

function AccessTagsToolsOpenHistoryButton() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearAccessTagsHistoryFilter());
    dispatch(setAccessTagsHistoryWindowMode("accessTags"));
    dispatch(setAccessTagsHistoryWindowOpen(true));
    fetchAccessTagsHistory();
  };
  return (
    <Button
      variant="contained"
      color="info"
      sx={{ width: { xs: "50%", md: "initial" } }}
      onClick={handleClick}
    >
      <HistoryIcon />
    </Button>
  );
}
export default AccessTagsToolsOpenHistoryButton;
