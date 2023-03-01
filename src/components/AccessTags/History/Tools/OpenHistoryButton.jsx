import React from "react";

import { Button } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";

import { useDispatch } from "react-redux";
import { setAccessTagsFullHistoryWindowIsOpen } from "@src/redux/slices/AccessTags/fullHistoryWindow";
import { fetchAccessTagsHistory } from "@src/redux/slices/AccessTags/history";
import { clearAccessTagsFullHistoryFilter } from "@src/redux/slices/AccessTags/fullHistoryFilter";

function AccessTagsToolsOpenHistoryButton() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearAccessTagsFullHistoryFilter());
    dispatch(setAccessTagsFullHistoryWindowIsOpen(true));
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
