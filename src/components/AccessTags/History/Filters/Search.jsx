import React from "react";
import { Search } from "@src/components/Basic";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAccessTagsFullHistoryFilter,
  setAccessTagsFullHistoryFillterSearchValue,
} from "@src/redux/slices/AccessTags/fullHistoryFilter";

function AccessTagsHistoryFiltersSearch() {
  const dispatch = useDispatch();
  const { searchValue } = useSelector(selectAccessTagsFullHistoryFilter);
  const handleSearch = (value) => {
    dispatch(setAccessTagsFullHistoryFillterSearchValue(value));
  };
  return (
    <Search
      value={searchValue}
      onChange={handleSearch}
      label="History search"
    />
  );
}

export default AccessTagsHistoryFiltersSearch;
