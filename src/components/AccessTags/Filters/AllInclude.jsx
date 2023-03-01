import React from "react";

import { Checkbox } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";

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
      icon={<AddCircleOutlineOutlinedIcon />}
      checkedIcon={<AddCircleIcon />}
    />
  );
}

export default AccessTagsFiltersAllInclude;