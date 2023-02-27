import React from "react";
import { Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectFilters as selectAccessTagsFilters } from "@src/redux/slices/AccessTags/filter";
import { MySelect } from "../Basic";
import {
  setSortBy as setAccessTagsSortBy,
  setOrder as setAccessTagsOrder,
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
        label={"Sort by"}
        value={tagsFilters.sortBy.value}
        options={sortByVariants}
        onChange={handleSortByChange}
      />
      <MySelect
        label={"Order by"}
        value={tagsFilters.order.value}
        options={orderVariants}
        onChange={handleOrderByChange}
      />
    </Stack>
  );
}

export default AccessTagsFilters;
