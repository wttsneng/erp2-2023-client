import React from "react";
import { Search } from "@src/components/Basic";
import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTagsFiltersMainSearchValue,
  selectAccessTagsFiltersMain,
} from "@src/redux/slices/AccessTags/filters/main";
import { useAccessTagsTranslation } from "@src/hooks/accessTags";
function AccessTagsSearch() {
  const dispatch = useDispatch();
  const { t } = useAccessTagsTranslation();
  const mainAccessTagsFilters = useSelector(selectAccessTagsFiltersMain);

  const onSearch = (value) => {
    dispatch(setAccessTagsFiltersMainSearchValue(value));
  };
  return (
    <Search
      onChange={onSearch}
      label={t("accessTags:Search")}
      value={mainAccessTagsFilters.searchValue}
    />
  );
}

export default AccessTagsSearch;
