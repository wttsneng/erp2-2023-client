import React from "react";

import { MySelect } from "@src/components/Basic";

import { useSelector, useDispatch } from "react-redux";
import { selectAccessTagsFiltersMain } from "@src/redux/slices/AccessTags/filters/main";
import {
  setAccessTagsFiltersMainSortBy,
  accessTagsFiltersMainSortByVariants,
} from "@src/redux/slices/AccessTags/filters/main";
import { useAccessTagsTranslation } from "@src/hooks/accessTags";

function AccessTagsFiltersSortBy() {
  const dispatch = useDispatch();
  const { t } = useAccessTagsTranslation();
  const tagsFilters = useSelector(selectAccessTagsFiltersMain);

  const handleSortByChange = (event) => {
    dispatch(setAccessTagsFiltersMainSortBy(event.target.value));
  };

  const translatedAccessTagsFiltersMainSortByVariants = {};

  for (let key in accessTagsFiltersMainSortByVariants) {
    translatedAccessTagsFiltersMainSortByVariants[key] = t(
      accessTagsFiltersMainSortByVariants[key]
    );
  }

  return (
    <MySelect
      value={tagsFilters.sortBy.value}
      label="Order by"
      options={translatedAccessTagsFiltersMainSortByVariants}
      onChange={handleSortByChange}
    />
  );
}

export default AccessTagsFiltersSortBy;
