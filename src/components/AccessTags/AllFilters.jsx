import React from "react";
import {
  AccessTagsFiltersOrderBy,
  AccessTagsFiltersSortBy,
  AccessTagsFiltersDeletedInclude,
  AccessTagsFiltersActiveInclude,
  AccessTagsFiltersAllInclude,
  AccessTagsFiltersNameSearch,
  AccessTagsFiltersDescriptionSearch,
  AccessTagsFiltersEventField,
} from "./index";
import { Stack, Box, Typography as MuiTypography } from "@mui/material";
import { styled } from "@mui/material/styles";
const Typography = styled(MuiTypography)({
  fontSize: "0.9rem",
  fontWeight: "bold",
  padding: 0,
  margin: 0,
});
function AccessTagsAllFilters() {
  return (
    <Stack direction={"column"} spacing={1}>
      <Box>
        <Typography>Name</Typography>
        <AccessTagsFiltersNameSearch />
      </Box>
      <Box>
        <Typography>Description</Typography>
        <AccessTagsFiltersDescriptionSearch />
      </Box>
      <Box>
        <Typography>Sort By</Typography>
        <AccessTagsFiltersSortBy />
      </Box>
      <Box>
        <Typography>Order By</Typography>
        <AccessTagsFiltersOrderBy />
      </Box>
      <Box>
        <Typography>Event</Typography>
        <AccessTagsFiltersEventField />
      </Box>
      <Box>
        <Typography>Deleted Include</Typography>
        <AccessTagsFiltersDeletedInclude />
        <AccessTagsFiltersActiveInclude />
        <AccessTagsFiltersAllInclude />
      </Box>
    </Stack>
  );
}

export default AccessTagsAllFilters;
