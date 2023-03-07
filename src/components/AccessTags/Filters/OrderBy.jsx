import React from "react";

import { MySelect } from "@src/components/Basic";

import { useSelector, useDispatch } from "react-redux";
import { selectAccessTagsFiltersMain } from "@src/redux/slices/AccessTags/filters/main";
import {
  setAccessTagsFiltersMainOrder,
  accessTagsFiltersMainOrderByVariants,
} from "@src/redux/slices/AccessTags/filters/main";
import { useAccessTagsTranslation } from "@src/hooks/accessTags";

function AccessTagsFiltersOrderBy() {
  const dispatch = useDispatch();
  const { t } = useAccessTagsTranslation();
  const tagsFilters = useSelector(selectAccessTagsFiltersMain);

  const handleOrderByChange = (event) => {
    dispatch(setAccessTagsFiltersMainOrder(event.target.value));
  };

  const translatedAccessTagsFiltersMainOrderByVariants = {};

  for (let key in accessTagsFiltersMainOrderByVariants) {
    translatedAccessTagsFiltersMainOrderByVariants[key] = t(
      accessTagsFiltersMainOrderByVariants[key]
    );
  }

  return (
    <MySelect
      value={tagsFilters.order.value}
      label="Order by"
      options={translatedAccessTagsFiltersMainOrderByVariants}
      onChange={handleOrderByChange}
    />
  );
}

export default AccessTagsFiltersOrderBy;
