import React from "react";

import { CheckboxDefault } from "@src/components/Basic/Checkbox";

import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTagsFiltersMainIncludeMode,
  selectAccessTagsFiltersMain,
} from "@src/redux/slices/AccessTags/filters/main";

function AccessTagsFiltersActiveInclude() {
  const dispatch = useDispatch();
  const { includeMode } = useSelector(selectAccessTagsFiltersMain);

  const handleChange = () => {
    dispatch(setAccessTagsFiltersMainIncludeMode(0));
  };
  return (
    <CheckboxDefault checked={includeMode === 0} onChange={handleChange} />
  );
}

export default AccessTagsFiltersActiveInclude;
