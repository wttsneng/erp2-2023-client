import React from "react";

import { SearchButton } from "@src/components/Basic";

import { useDispatch } from "react-redux";
import { setAccessTagsWindowsFilterOpen } from "@src/redux/slices/AccessTags/windows/filter";

function AccessTagsToolsOpenFiltersButton() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setAccessTagsWindowsFilterOpen(true));
  };
  return <SearchButton onClick={handleClick} />;
}
export default AccessTagsToolsOpenFiltersButton;
