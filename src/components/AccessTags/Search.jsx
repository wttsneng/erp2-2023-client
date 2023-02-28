import React from "react";
import { Search } from "@src/components/Basic";
import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTagsSearchValue,
  selectAccessTagsFilters,
} from "@src/redux/slices/AccessTags/filter";
function AccessTagsSearch() {
  const dispatch = useDispatch();
  const tagsFilters = useSelector(selectAccessTagsFilters);

  const onSearch = (value) => {
    dispatch(setAccessTagsSearchValue(value));
  };
  return (
    <Search
      onChange={onSearch}
      label="Access tags search"
      value={tagsFilters.searchValue}
    />
  );
}

export default AccessTagsSearch;