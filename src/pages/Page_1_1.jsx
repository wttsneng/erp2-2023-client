import React from "react";

import { Box, Grid } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { setSidebarActiveByLink } from "../redux/slices/sidebarSlice";
import {
  setAccessTagsSearchValue,
  selectAccessTagsFilters,
} from "../redux/slices/AccessTagsFilterSlice";
import { fetchAccessTags } from "../redux/slices/AccessTagsSlice";

import { Search } from "../components/Basic";
import AccessTagInput from "../components/AccessTags/AccessTagEdit";
import AccessTagsTable from "../components/AccessTags/AccessTagsTable";
import AccessTagsFilters from "../components/AccessTags/AccessTagsFilters";
import AccessTagsAddDelete from "../components/AccessTags/AccessTagsAddDelete";
import AccessTagsHistoryWindow from "../components/AccessTags/AccessTagsHistoryWindow";

export default function Tags() {
  const dispatch = useDispatch();
  const tagsFilters = useSelector(selectAccessTagsFilters);

  const onSearch = (value) => {
    dispatch(setAccessTagsSearchValue(value));
  };

  React.useEffect(() => {
    dispatch(setSidebarActiveByLink("page/1_1"));
  }, []);

  React.useEffect(() => {
    dispatch(fetchAccessTags(tagsFilters));
  }, [tagsFilters]);

  return (
    <div className="">
      <Grid container spacing={2}>
        <Grid item md={8} xs={12} order={{ xs: 2, md: 1 }}>
          <AccessTagsHistoryWindow />

          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              padding: 2,
            }}
          >
            <Search
              onChange={onSearch}
              sx={{ width: "100%" }}
              label="Access tags search"
              value={tagsFilters.searchValue}
            />
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              padding: 2,
              marginBlockStart: 2,
            }}
          >
            <Grid container justifyContent={"space-between"} spacing={2}>
              <Grid item xs={12} md={6}>
                <AccessTagsFilters />
              </Grid>
              <Grid item xs={12} md={"auto"}>
                <AccessTagsAddDelete />
              </Grid>
            </Grid>
            <AccessTagsTable />
          </Box>
        </Grid>
        <Grid item md={4} xs={12} order={{ xs: 1, md: 2 }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              padding: 2,
            }}
          >
            <form>
              <AccessTagInput />
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
