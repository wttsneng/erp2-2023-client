import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAccessTagsFilters } from "@src/redux/slices/AccessTags/filter";
import { MySelect } from "@src/components/Basic";
import {
  setAccessTagsFiltersSortBy,
  sortByVariants,
} from "@src/redux/slices/AccessTags/filter";

function AccessTagsFiltersSortBy() {
  const dispatch = useDispatch();
  const tagsFilters = useSelector(selectAccessTagsFilters);

  const handleSortByChange = (event) => {
    dispatch(setAccessTagsFiltersSortBy(event.target.value));
  };

  return (
    <MySelect
      value={tagsFilters.sortBy.value}
      label="Order by"
      options={sortByVariants}
      onChange={handleSortByChange}
    />
  );
}

export default AccessTagsFiltersSortBy;
