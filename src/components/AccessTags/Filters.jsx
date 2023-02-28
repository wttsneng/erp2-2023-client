import React from "react";
import { Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectAccessTagsFilters } from "@src/redux/slices/AccessTags/filter";
import { MySelect } from "../Basic";
import {
  setAccessTagsSortBy,
  setAccessTagsOrder,
  sortByVariants,
  orderVariants,
} from "@src/redux/slices/AccessTags/filter";

function AccessTagsFilters() {
  const dispatch = useDispatch();
  const tagsFilters = useSelector(selectAccessTagsFilters);

  const handleSortByChange = (event) => {
    dispatch(setAccessTagsSortBy(event.target.value));
  };

  const handleOrderByChange = (event) => {
    dispatch(setAccessTagsOrder(event.target.value));
  };

  return (
    <Stack direction="row" spacing={2}>
      <MySelect
        value={tagsFilters.sortBy.value}
        label="Order by"
        options={sortByVariants}
        onChange={handleSortByChange}
      />
      <MySelect
        value={tagsFilters.order.value}
        label="Order by"
        options={orderVariants}
        onChange={handleOrderByChange}
      />
    </Stack>
  );
}

export default AccessTagsFilters;