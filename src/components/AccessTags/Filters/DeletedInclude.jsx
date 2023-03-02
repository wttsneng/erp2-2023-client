import React from "react";

import { Checkbox } from "@mui/material";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";

import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTagsFiltersIncludeMode,
  selectAccessTagsFilters,
} from "@src/redux/slices/AccessTags/filter";

function AccessTagsFiltersDeletedInclude() {
  const dispatch = useDispatch();
  const { includeMode } = useSelector(selectAccessTagsFilters);

  const handleChange = () => {
    dispatch(setAccessTagsFiltersIncludeMode(-1));
  };
  return (
    <Checkbox
      sx={{
        width: "30px",
        height: "30px",
      }}
      checked={includeMode === -1}
      onChange={handleChange}
      icon={<RemoveCircleOutlineOutlinedIcon />}
      checkedIcon={<RemoveCircleOutlinedIcon />}
    />
  );
}

export default AccessTagsFiltersDeletedInclude;
