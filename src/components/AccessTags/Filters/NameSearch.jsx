import React from "react";

import { Search } from "@src/components/Basic";

import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTagsFiltersMainName,
  selectAccessTagsFiltersMain,
} from "@src/redux/slices/AccessTags/filters/main";

function AccessTagsFiltersNameSearch() {
  const dispatch = useDispatch();
  const { name } = useSelector(selectAccessTagsFiltersMain);
  const handleChange = (value) => {
    dispatch(setAccessTagsFiltersMainName(value));
  };
  return <Search onChange={handleChange} value={name} />;
}

export default AccessTagsFiltersNameSearch;
