import React from "react";

import { Search } from "@src/components/Basic";
import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTagsFiltersMainDescription,
  selectAccessTagsFiltersMain,
} from "@src/redux/slices/AccessTags/filters/main";
function AccessTagsFiltersDescriptionSearch() {
  const dispatch = useDispatch();
  const { description } = useSelector(selectAccessTagsFiltersMain);
  const handleChange = (value) => {
    dispatch(setAccessTagsFiltersMainDescription(value));
  };
  return <Search onChange={handleChange} value={description} />;
}

export default AccessTagsFiltersDescriptionSearch;
