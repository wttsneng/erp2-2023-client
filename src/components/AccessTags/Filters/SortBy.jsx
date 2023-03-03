import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAccessTagsFiltersMain } from "@src/redux/slices/AccessTags/filters/main";
import { MySelect } from "@src/components/Basic";
import {
  setAccessTagsFiltersMainSortBy,
  accessTagsFiltersMainSortByVariants,
} from "@src/redux/slices/AccessTags/filters/main";

function AccessTagsFiltersSortBy() {
  const dispatch = useDispatch();
  const tagsFilters = useSelector(selectAccessTagsFiltersMain);

  const handleSortByChange = (event) => {
    dispatch(setAccessTagsFiltersMainSortBy(event.target.value));
  };

  return (
    <MySelect
      value={tagsFilters.sortBy.value}
      label="Order by"
      options={accessTagsFiltersMainSortByVariants}
      onChange={handleSortByChange}
    />
  );
}

export default AccessTagsFiltersSortBy;
