import React from "react";
import { Search } from "@src/components/Basic";
import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTagsFiltersMainSearchValue,
  selectAccessTagsFiltersMain,
} from "@src/redux/slices/AccessTags/filters/main";
function AccessTagsSearch() {
  const dispatch = useDispatch();
  const mainAccessTagsFilters = useSelector(selectAccessTagsFiltersMain);

  const onSearch = (value) => {
    dispatch(setAccessTagsFiltersMainSearchValue(value));
  };
  return (
    <Search
      onChange={onSearch}
      label="Access tags search"
      value={mainAccessTagsFilters.searchValue}
    />
  );
}

export default AccessTagsSearch;
