import React from "react";

import { SearchButton } from "@src/components/Basic";

import { useDispatch } from "react-redux";
import { setAccessTagsFilterWindowIsOpen } from "@src/redux/slices/AccessTags/filterWindow";

function AccessTagsToolsOpenFiltersButton() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setAccessTagsFilterWindowIsOpen(true));
  };
  return <SearchButton onClick={handleClick} />;
}
export default AccessTagsToolsOpenFiltersButton;
