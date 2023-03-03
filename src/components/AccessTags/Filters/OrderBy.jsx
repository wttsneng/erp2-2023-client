import React from "react";

import { Stack } from "@mui/material";
import { MySelect } from "@src/components/Basic";

import { useSelector, useDispatch } from "react-redux";
import { selectAccessTagsFiltersMain } from "@src/redux/slices/AccessTags/filters/main";
import {
  setAccessTagsFiltersMainOrder,
  accessTagsFiltersMainOrderByVariants,
} from "@src/redux/slices/AccessTags/filters/main";

function AccessTagsFiltersOrderBy() {
  const dispatch = useDispatch();
  const tagsFilters = useSelector(selectAccessTagsFiltersMain);

  const handleOrderByChange = (event) => {
    dispatch(setAccessTagsFiltersMainOrder(event.target.value));
  };

  return (
    <MySelect
      value={tagsFilters.order.value}
      label="Order by"
      options={accessTagsFiltersMainOrderByVariants}
      onChange={handleOrderByChange}
    />
  );
}

export default AccessTagsFiltersOrderBy;
