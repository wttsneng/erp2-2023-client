import React from "react";
import { Search } from "@src/components/Basic";
import { useSelector, useDispatch } from "react-redux";
import {
  selectHistoryFilter,
  setHistorySearchValue,
} from "@src/redux/slices/AccessTags/historyFilter";
import { Box } from "@mui/material";

function AccessTagsHistorySearch() {
  const dispatch = useDispatch();
  const filter = useSelector(selectHistoryFilter);
  const handleChange = (value) => {
    dispatch(setHistorySearchValue(value));
  };
  return (
    <Box sx={{ paddingBottom: 2 }}>
      <Search
        value={filter.searchValue}
        label={"History search"}
        onChange={handleChange}
      />
    </Box>
  );
}

export default AccessTagsHistorySearch;
