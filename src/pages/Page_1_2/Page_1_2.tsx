import React from "react";

import { Grid, Box, Stack } from "@mui/material";

import { injectAccessTagsReducers } from "@src/redux/slices/AccessTags/initAccessTagsRedux";
import { injectAccessGroupsReducers } from "@src/redux/slices/AccessGroups/initAccessGroupsRedux";
import { useAccessTagsDispatch } from "@src/hooks/accessTags/useAccessTagsRedux";
import { setSidebarActiveByLink } from "@src/redux/slices/Basic/sidebarSlice";
import { useAccessGroupsLocales } from "@src/hooks/accessGroups";

import { useAccessTagsClearPage } from "@src/hooks/accessTags";
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
} from "@src/components/AccessTags";
import { AccessGroupsFltersSearch } from "@src/components/AccessGroup";
import { BoxDefault } from "@src/components/Basic";
injectAccessTagsReducers();
injectAccessGroupsReducers();

function Page_1_2() {
  const dispatch = useAccessTagsDispatch();
  useAccessGroupsLocales();

  useAccessTagsClearPage();

  React.useEffect(() => {
    dispatch(setSidebarActiveByLink("page/1_2"));
  }, [dispatch]);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <BoxDefault>
            <AccessGroupsFltersSearch />
          </BoxDefault>
        </Grid>

        <Grid item md={6} xs={12}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              "& .editContainer": {
                padding: 2,
                marginBottom: 2,
              },
            }}
          >
            <AccessTagsEdit />
          </Box>
          <BoxDefault>
            <Stack direction={"row"} spacing={2}>
              <AccessTagsSearch />
              <AccessTagsToolsOpenFiltersButton />
            </Stack>
            <AccessTagsToolbar />
            <AccessTagsTable />
            <AccessTagsTableFooter />
          </BoxDefault>
        </Grid>
      </Grid>

      <AccessTagsWindowsMiniHistoryWindow />
      <AccessTagsWindowsFullHistoryWindow />
      <AccessTagsWindowsFilterWindow />
      <AccessTagsWarningsDelete />
    </>
  );
}

export default Page_1_2;
