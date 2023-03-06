import React from "react";
import { Pagination } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import {
  setAccessTagsHistoryFiltersMainPage,
  selectAccessTagsHistoryFiltersMainFilter,
} from "@src/redux/slices/AccessTags/history/filters/main";

function AccessTagsHistoryFiltersPagination() {
  const dispatch = useDispatch();
  const filter = useSelector(selectAccessTagsHistoryFiltersMainFilter);
  const documentCount = useSelector(
    (state) => state.accessTags.history.data.main.count
  );
  const count = Math.ceil(documentCount / filter.limit);
  const handlePageChange = (event, value) => {
    dispatch(setAccessTagsHistoryFiltersMainPage(value));
  };
  return (
    <Pagination count={count} page={filter.page} onChange={handlePageChange} />
  );
}

export default AccessTagsHistoryFiltersPagination;
