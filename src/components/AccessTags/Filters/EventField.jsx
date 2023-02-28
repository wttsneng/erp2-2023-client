import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAccessTagsFilters } from "@src/redux/slices/AccessTags/filter";
import { MySelect } from "@src/components/Basic";
import {
  setAccessTagsFiltersEvent,
  eventVariants,
} from "@src/redux/slices/AccessTags/filter";

function AccessTagsFiltersEventField() {
  const dispatch = useDispatch();
  const tagsFilters = useSelector(selectAccessTagsFilters);

  const handleSortByChange = (event) => {
    dispatch(setAccessTagsFiltersEvent(event.target.value));
  };

  return (
    <MySelect
      value={tagsFilters.event.value}
      label="Event"
      options={eventVariants}
      onChange={handleSortByChange}
    />
  );
}

export default AccessTagsFiltersEventField;
