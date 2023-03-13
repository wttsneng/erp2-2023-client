import React from "react";

import { MySelect } from "@src/components/Basic";
import { SelectChangeEvent } from "@mui/material";

import {
  useAccessGroupsDispatch,
  useAccessGroupsSelector,
} from "@src/hooks/accessGroups/useRedux";
import { selectAccessGroupsFiltersMain } from "@src/redux/slices/AccessGroups/filters/main";
import {
  setAccessGroupsFiltersMainSortBy,
  accessGroupsFiltersMainSortByVariants,
} from "@src/redux/slices/AccessGroups/filters/main";

import { useAccessGroupsTranslation } from "@src/hooks/accessGroups";

function AccessGroupsTableSortByMenu() {
  const dispatch = useAccessGroupsDispatch();
  const { t } = useAccessGroupsTranslation();
  const tagsFilters = useAccessGroupsSelector(selectAccessGroupsFiltersMain);

  const handleSortByChange = (event: SelectChangeEvent<{}>) => {
    dispatch(setAccessGroupsFiltersMainSortBy(event.target.value));
  };

  const translatedAccessTagsFiltersMainSortByVariants = {};

  for (let key in accessGroupsFiltersMainSortByVariants) {
    translatedAccessTagsFiltersMainSortByVariants[key] = t(
      `filters.${accessGroupsFiltersMainSortByVariants[key]}`
    );
  }

  return (
    <MySelect
      value={tagsFilters.sortBy.value}
      label="Order by"
      options={translatedAccessTagsFiltersMainSortByVariants}
      onChange={handleSortByChange}
      sx={{
        color: "primary.main",
        border: "none",
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "& .MuiSvgIcon-root": {
          display: "none",
        },
      }}
    />
  );
}

export default AccessGroupsTableSortByMenu;
