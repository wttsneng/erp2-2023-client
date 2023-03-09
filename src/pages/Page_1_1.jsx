import React from "react";
import { Box, Grid, Stack } from "@mui/material";

import { useAccessTagsDispatch } from "@src/hooks/accessTags/useAccessTagsRedux";
import { setSidebarActiveByLink } from "@src/redux/slices/Basic/sidebarSlice";

import { injectAccessTagsReducers } from "@src/redux/slices/AccessTags/initAccessTagsRedux";

import {
  useAccessTagsLocales,
  useAccessTagsClearPage,
} from "@src/hooks/accessTags";

import {
  AccessTagsSearch,
  AccessTagsEdit,
  AccessTagsTable,
  AccessTagsToolbar,
  AccessTagsWindowsFullHistoryWindow,
  AccessTagsTableFooter,
  AccessTagsToolsOpenFiltersButton,
  AccessTagsWindowsFilterWindow,
  AccessTagsWindowsMiniHistoryWindow,
  AccessTagsWarningsDelete,
  AccessTagsTableStyledBox,
} from "@src/components/AccessTags";

injectAccessTagsReducers();
export default function AccessTags() {
  const dispatch = useAccessTagsDispatch();
  useAccessTagsLocales();
  useAccessTagsClearPage();

  React.useEffect(() => {
    dispatch(setSidebarActiveByLink("page/1_1"));
  }, [dispatch]);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12} order={{ xs: 2, md: 1 }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              padding: 2,
            }}
          >
            <Stack direction={"row"} spacing={2}>
              <AccessTagsSearch />
              <AccessTagsToolsOpenFiltersButton />
            </Stack>
            <AccessTagsToolbar />
            <AccessTagsTableStyledBox>
              <AccessTagsTable />
            </AccessTagsTableStyledBox>
            <AccessTagsTableFooter />
          </Box>
        </Grid>
        <Grid item md={4} xs={12} order={{ xs: 1, md: 2 }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              "& .editContainer": {
                padding: 2,
              },
            }}
          >
            <AccessTagsEdit />
          </Box>
        </Grid>
      </Grid>
      <AccessTagsWindowsMiniHistoryWindow />
      <AccessTagsWindowsFullHistoryWindow />
      <AccessTagsWindowsFilterWindow />
      <AccessTagsWarningsDelete />
    </div>
  );
}
