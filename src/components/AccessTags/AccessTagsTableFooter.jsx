import React from "react";
import { Box, Typography, Pagination } from "@mui/material";

import { MySelect } from "../Basic";

import { useSelector, useDispatch } from "react-redux";
import { setPage as setAccessTagsPage } from "@src/redux/slices/AccessTags/filter";
import {
  selectFilters as selectAccessTagsFilters,
  setLimit as setAccessTagsLimit,
} from "@src/redux/slices/AccessTags/filter";

function AccessTagsTableFooter() {
  const dispatch = useDispatch();
  const tagsCount = useSelector((state) => state.accessTags.data.count);
  const tagsTotalPages = useSelector(
    (state) => state.accessTags.data.totalPages
  );
  const page = useSelector((state) => state.accessTags.filter.page);
  const tagsFilters = useSelector(selectAccessTagsFilters);
  const handlePageChange = (event, value) => {
    dispatch(setAccessTagsPage(value));
  };
  const handleLimitChange = (event) => {
    dispatch(setAccessTagsLimit(event.target.value));
  };
  return (
    <Box
      sx={{
        marginBlockStart: 1,
      }}
    >
      <Typography>Total count:{tagsCount}</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBlockStart: "1px solid grey",
          paddingBlockStart: 1,
        }}
      >
        <Pagination
          count={tagsTotalPages}
          page={page}
          onChange={handlePageChange}
        />
        <Box>
          <MySelect
            label={"Show per page"}
            value={tagsFilters.limit}
            options={[50, 100, 200]}
            onChange={handleLimitChange}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default AccessTagsTableFooter;
