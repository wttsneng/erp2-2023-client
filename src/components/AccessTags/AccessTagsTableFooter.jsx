import React from "react";
import { Box, Typography, Pagination } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { setAccessTagsPage } from "../../redux/slices/AccessTagsFilterSlice";
import {
  selectAccessTagsFilters,
  setAccessTagsLimit,
} from "../../redux/slices/AccessTagsFilterSlice";
import { MySelect } from "../Basic";

function AccessTagsTableFooter() {
  const dispatch = useDispatch();
  const tagsCount = useSelector((state) => state.accessTags.count);
  const tagsTotalPages = useSelector((state) => state.accessTags.totalPages);
  const page = useSelector((state) => state.accessTagsFilter.page);
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
        <Pagination count={20} page={page} onChange={handlePageChange} />
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
