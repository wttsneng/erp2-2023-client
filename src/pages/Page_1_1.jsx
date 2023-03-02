import React from "react";
import { Box, Grid, Stack } from "@mui/material";

import { useDispatch } from "react-redux";
import { setSidebarActiveByLink } from "@src/redux/slices/Basic/sidebarSlice";
import initAccessTagRedux from "@src/redux/slices/AccessTags/initAccessTagsRedux";

import {
  AccessTagsSearch,
  AccessTagEdit,
  AccessTagsTable,
  AccessTagsToolbar,
  AccessTagsWindowsFullHistoryWindow,
  AccessTagsTableFooter,
  AccessTagsToolsOpenFiltersButton,
  AccessTagsWindowsFilterWindow,
  AccessTagsWindowsMiniHistoryWindow,
  AccessTagsWarningsDelete,
} from "@src/components/AccessTags";
initAccessTagRedux();

export default function AccessTags() {
  const dispatch = useDispatch();
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
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Stack direction={"row"} spacing={2}>
                  <AccessTagsSearch />
                  <AccessTagsToolsOpenFiltersButton />
                </Stack>
              </Grid>
            </Grid>
            <AccessTagsToolbar />
            <AccessTagsTable />
            <AccessTagsTableFooter />
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          order={{ xs: 1, md: 2 }}
          sx={{
            borderRadius: 1,
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              padding: 2,
              marginBottom: 2,
            }}
          >
            <AccessTagEdit />
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
