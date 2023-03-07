import React from "react";

import { CheckboxPlus } from "@src/components/Basic/Checkbox";

import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTagsFiltersMainIncludeMode,
  selectAccessTagsFiltersMain,
} from "@src/redux/slices/AccessTags/filters/main";

function AccessTagsFiltersAllInclude() {
  const dispatch = useDispatch();
  const { includeMode } = useSelector(selectAccessTagsFiltersMain);

  const handleChange = () => {
    dispatch(setAccessTagsFiltersMainIncludeMode(1));
  };
  return <CheckboxPlus checked={includeMode === 1} onChange={handleChange} />;
}

export default AccessTagsFiltersAllInclude;
