import React from "react";
import { Grid, Stack } from "@mui/material";

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
  AccessTagsUiBoxEdit,
} from "@src/components/AccessTags";
import { BoxDefault } from "@src/components/Basic";

injectAccessTagsReducers();
export default function AccessTags() {
  const dispatch = useAccessTagsDispatch();
  useAccessTagsLocales();
  useAccessTagsClearPage();

  React.useEffect(() => {
    dispatch(setSidebarActiveByLink("page/1_1"));
  }, [dispatch]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12} order={{ xs: 2, md: 1 }}>
          <BoxDefault>
            <Stack direction={"row"} spacing={2}>
              <AccessTagsSearch />
              <AccessTagsToolsOpenFiltersButton />
            </Stack>
            <AccessTagsToolbar />
            <AccessTagsTableStyledBox>
              <AccessTagsTable />
            </AccessTagsTableStyledBox>
            <AccessTagsTableFooter />
          </BoxDefault>
        </Grid>
        <Grid item md={4} xs={12} order={{ xs: 1, md: 2 }}>
          <AccessTagsUiBoxEdit>
            <AccessTagsEdit />
          </AccessTagsUiBoxEdit>
        </Grid>
      </Grid>
      <AccessTagsWindowsMiniHistoryWindow />
      <AccessTagsWindowsFullHistoryWindow />
      <AccessTagsWindowsFilterWindow />
      <AccessTagsWarningsDelete />
    </>
  );
}
