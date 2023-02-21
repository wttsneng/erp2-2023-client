import React from "react";
import { Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectAccessTagsFilters } from "../../redux/slices/AccessTagsFilterSlice";
import MySelect from "../MySelect";
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

  const handleLimitChange = (event) => {
    dispatch(setAccessTagsLimit(event.target.value));
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
      <MySelect
        label={"Show per page"}
        value={tagsFilters.limit}
        options={[50, 100, 200]}
        onChange={handleLimitChange}
      />
    </Stack>
  );
}

export default AccessTagsFilters;
