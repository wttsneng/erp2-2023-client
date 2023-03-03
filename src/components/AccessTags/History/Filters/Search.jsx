import React from "react";
import { Search } from "@src/components/Basic";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAccessTagsHistoryFiltersMainFilter,
  setAccessTagsHistoryFiltersMainSearchValue,
} from "@src/redux/slices/AccessTags/history/filters/main";

function AccessTagsHistoryFiltersSearch() {
  const dispatch = useDispatch();
  const { searchValue } = useSelector(selectAccessTagsHistoryFiltersMainFilter);
  const handleSearch = (value) => {
    dispatch(setAccessTagsHistoryFiltersMainSearchValue(value));
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
