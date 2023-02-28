import React from "react";

import { Stack } from "@mui/material";
import { MySelect } from "@src/components/Basic";

import { useSelector, useDispatch } from "react-redux";
import { selectAccessTagsFilters } from "@src/redux/slices/AccessTags/filter";
import {
  setAccessTagsFiltersOrder,
  orderVariants,
} from "@src/redux/slices/AccessTags/filter";

function AccessTagsFiltersOrderBy() {
  const dispatch = useDispatch();
  const tagsFilters = useSelector(selectAccessTagsFilters);

  const handleOrderByChange = (event) => {
    dispatch(setAccessTagsFiltersOrder(event.target.value));
  };

  return (
    <Stack direction="row" spacing={2}>
      <MySelect
        value={tagsFilters.order.value}
        label="Order by"
        options={orderVariants}
        onChange={handleOrderByChange}
      />
    </Stack>
  );
}

export default AccessTagsFiltersOrderBy;
