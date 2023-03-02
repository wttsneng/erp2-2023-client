import React from "react";
import { Pagination } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import {
  setAccessTagsFullHistoryFilterPage,
  selectAccessTagsFullHistoryFilter,
} from "@src/redux/slices/AccessTags/fullHistoryFilter";

function AccessTagsHistoryFiltersPagination() {
  const dispatch = useDispatch();
  const filter = useSelector(selectAccessTagsFullHistoryFilter);
  const documentCount = useSelector((state) => state.accessTags.history.count);
  const count = Math.ceil(documentCount / filter.limit);
  const handlePageChange = (event, value) => {
    dispatch(setAccessTagsFullHistoryFilterPage(value));
  };
  return (
    <Pagination count={count} page={filter.page} onChange={handlePageChange} />
  );
}

export default AccessTagsHistoryFiltersPagination;
