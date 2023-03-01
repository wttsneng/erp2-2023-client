import React from "react";

import { Search } from "@src/components/Basic";
import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTagsFiltersDescription,
  selectAccessTagsFilters,
} from "@src/redux/slices/AccessTags/filter";
function AccessTagsFiltersDescriptionSearch() {
  const dispatch = useDispatch();
  const { description } = useSelector(selectAccessTagsFilters);
  const handleChange = (value) => {
    dispatch(setAccessTagsFiltersDescription(value));
  };
  return <Search onChange={handleChange} value={description} />;
}

export default AccessTagsFiltersDescriptionSearch;
