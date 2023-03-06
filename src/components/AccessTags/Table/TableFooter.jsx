import React from "react";
import { Box, Typography, Pagination } from "@mui/material";

import { MySelect } from "../../Basic";

import { useSelector, useDispatch } from "react-redux";
import { setAccessTagsFiltersMainPage } from "@src/redux/slices/AccessTags/filters/main";
import {
  selectAccessTagsFiltersMain,
  setAccessTagsFiltersMainLimit,
} from "@src/redux/slices/AccessTags/filters/main";

function AccessTagsTableFooter() {
  const dispatch = useDispatch();
  const tagsCount = useSelector((state) => state.accessTags.data.main.count);
  const tagsTotalPages = useSelector(
    (state) => state.accessTags.data.main.totalPages
  );
  const page = useSelector((state) => state.accessTags.filters.main.page);
  const tagsFilters = useSelector(selectAccessTagsFiltersMain);
  const handlePageChange = (event, value) => {
    dispatch(setAccessTagsFiltersMainPage(value));
  };
  const handleLimitChange = (event) => {
    dispatch(setAccessTagsFiltersMainLimit(event.target.value));
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
