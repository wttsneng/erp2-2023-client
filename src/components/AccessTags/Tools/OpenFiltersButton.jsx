import React from "react";

import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useDispatch } from "react-redux";
import { setAccessTagsFilterWindowIsOpen } from "@src/redux/slices/AccessTags/filterWindow";

function AccessTagsToolsOpenFiltersButton() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setAccessTagsFilterWindowIsOpen(true));
  };
  return (
    <Button variant="contained" color="info" onClick={handleClick}>
      <SearchIcon />
    </Button>
  );
}

export default AccessTagsToolsOpenFiltersButton;
