import React from "react";

import { Search } from "@src/components/Basic";
import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTagsFiltersName,
  selectAccessTagsFilters,
} from "@src/redux/slices/AccessTags/filter";
function AccessTagsFiltersNameSearch() {
  const dispatch = useDispatch();
  const { name } = useSelector(selectAccessTagsFilters);
  const handleChange = (value) => {
    dispatch(setAccessTagsFiltersName(value));
  };
  return <Search onChange={handleChange} value={name} />;
}

export default AccessTagsFiltersNameSearch;
