import React from "react";
import { Search } from "@src/components/Basic";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAccessTagsHistoryFilter,
  setAccessTagsHistorySearchValue,
} from "@src/redux/slices/AccessTags/historyFilter";
import { Box } from "@mui/material";

function AccessTagsHistorySearch() {
  const dispatch = useDispatch();
  const filter = useSelector(selectAccessTagsHistoryFilter);
  const handleChange = (value) => {
    dispatch(setAccessTagsHistorySearchValue(value));
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
