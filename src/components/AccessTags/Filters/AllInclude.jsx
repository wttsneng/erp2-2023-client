import React from "react";

import { Checkbox } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTagsFiltersIncludeMode,
  selectAccessTagsFilters,
} from "@src/redux/slices/AccessTags/filter";
function AccessTagsFiltersAllInclude() {
  const dispatch = useDispatch();
  const { includeMode } = useSelector(selectAccessTagsFilters);

  const handleChange = () => {
    dispatch(setAccessTagsFiltersIncludeMode(1));
  };
  return (
    <Checkbox
      sx={{
        width: "30px",
        height: "30px",
      }}
      checked={includeMode === 1}
      onChange={handleChange}
      icon={<CheckCircleOutlineOutlinedIcon />}
      checkedIcon={<CheckCircleIcon />}
    />
  );
}

export default AccessTagsFiltersAllInclude;
