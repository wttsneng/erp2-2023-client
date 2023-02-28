import React from "react";

import { Checkbox } from "@mui/material";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTagsFiltersIncludeMode,
  selectAccessTagsFilters,
} from "@src/redux/slices/AccessTags/filter";
function AccessTagsFiltersActiveInclude() {
  const dispatch = useDispatch();
  const { includeMode } = useSelector(selectAccessTagsFilters);

  const handleChange = () => {
    dispatch(setAccessTagsFiltersIncludeMode(0));
  };
  return (
    <Checkbox
      sx={{
        width: "30px",
        height: "30px",
      }}
      checked={includeMode === 0}
      onChange={handleChange}
      icon={<RadioButtonUncheckedOutlinedIcon />}
      checkedIcon={<RadioButtonCheckedIcon />}
    />
  );
}

export default AccessTagsFiltersActiveInclude;
