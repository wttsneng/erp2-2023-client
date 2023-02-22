import React from "react";
import { Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectAccessTagsFilters } from "../../redux/slices/AccessTagsFilterSlice";
import { MySelect } from "../Basic";
import {
  setAccessTagsSortBy,
  setAccessTagsOrder,
  setAccessTagsLimit,
  sortByVariants,
  orderVariants,
} from "../../redux/slices/AccessTagsFilterSlice";

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
