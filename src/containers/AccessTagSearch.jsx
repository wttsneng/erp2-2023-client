import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import {
  selectAccessTags,
  selectAccessTagStatus,
} from "../redux/slices/AccessTagsSlice";
import {
  selectAccessTagsFilters,
  setAccessTagsSearchValue,
  setAccessTagsSortBy,
  setAccessTagsOrder,
  setAccessTagsLimit,
  sortByVariants,
  orderVariants,
} from "../redux/slices/AccessTagsFilterSlice";
import { setAccessTagsInputId } from "../redux/slices/AccessTagsInputSlice";

import Search from "../components/Search";
import TagsList from "../components/TagsList";
import MySelect from "../components/MySelect";

function AccessTagSearch() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const tagsFilters = useSelector(selectAccessTagsFilters);
  const tags = useSelector(selectAccessTags);
  const tagsStatus = useSelector(selectAccessTagStatus);
  const tagsCount = useSelector((state) => state.accessTags.count);

  const onSearch = (value) => {
    dispatch(setAccessTagsSearchValue(value));
  };

  const handleSortByChange = (event) => {
    dispatch(setAccessTagsSortBy(event.target.value));
  };

  const handleOrderByChange = (event) => {
    dispatch(setAccessTagsOrder(event.target.value));
  };

  const handleLimitChange = (event) => {
    dispatch(setAccessTagsLimit(event.target.value));
  };

  const handleTagClick = (tag) => {
    dispatch(setAccessTagsInputId(tag.id));
  };

  return (
    <React.Fragment>
      <Search
        onChange={onSearch}
        sx={{ width: "100%" }}
        label="Access tags search"
        value={tagsFilters.searchValue}
      />

      <Stack direction="row" spacing={2} sx={{ marginBlockStart: 2 }}>
        <MySelect
          label={"Sort by"}
          value={tagsFilters.sortBy.value}
          options={sortByVariants}
          onChange={handleSortByChange}
        />
        <MySelect
          label={"Order by"}
          value={tagsFilters.order.value}
          options={orderVariants}
          onChange={handleOrderByChange}
        />
        <MySelect
          label={"Show per page"}
          value={tagsFilters.limit}
          options={[50, 100, 200]}
          onChange={handleLimitChange}
        />
      </Stack>

      <Typography sx={{ marginY: 1 }}>Total count:{tagsCount}</Typography>

      <Box
        sx={{
          border: `1px solid ${theme.palette.grey[400]}`,
          borderRadius: 1,
          paddingTop: 1,
          paddingX: 1,
        }}
      >
        {tagsStatus === "success" && (
          <TagsList arr={tags} onClick={handleTagClick} />
        )}
      </Box>
    </React.Fragment>
  );
}

export default AccessTagSearch;
