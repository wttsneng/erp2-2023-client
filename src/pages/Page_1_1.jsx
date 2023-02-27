import React from "react";
import { Box, Grid } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { setSidebarActiveByLink } from "@src/redux/slices/Basic/sidebarSlice";
import { selectFilters as selectAccessTagsFilters } from "@src/redux/slices/AccessTags/filter";

import { fetchTags as fetchAccessTags } from "@src/redux/slices/AccessTags/data";
import { filterReducer } from "@src/redux/slices/AccessTags/filter";
import { historyFilterReducer } from "@src/redux/slices/AccessTags/historyFilter";
import { dataReducer } from "@src/redux/slices/AccessTags/data";
import { historyReducer } from "@src/redux/slices/AccessTags/history";
import { inputReducer } from "@src/redux/slices/AccessTags/input";
import { historyWindowReducer } from "@src/redux/slices/AccessTags/historyWindow";
import { tableReducer } from "@src/redux/slices/AccessTags/table";

import { store } from "@src/index";
import { injectAsyncReducer } from "@src/redux/store";
import { combineReducers } from "redux";

import AccessTagsSearch from "@src/components/AccessTags/AccessTagsSearch";
import AccessTagInput from "@src/components/AccessTags/AccessTagEdit";
import AccessTagsTable from "@src/components/AccessTags/AccessTagsTable";
import AccessTagsFilters from "@src/components/AccessTags/AccessTagsFilters";
import AccessTagsToolbar from "@src/components/AccessTags/AccessTagsToolbar";
import AccessTagsHistoryWindow from "@src/components/AccessTags/AccessTagsWindow/AccessTagsHistoryWindow";
import AccessTagsTableFooter from "@src/components/AccessTags/AccessTagsTableFooter";
import AccessTagContextMenu from "@src/components/AccessTags/AccessTagContextMenu";

const AccessTagCombinedReducer = combineReducers({
  data: dataReducer,
  filter: filterReducer,
  history: historyReducer,
  historyFilter: historyFilterReducer,
  input: inputReducer,
  historyWindow: historyWindowReducer,
  table: tableReducer,
});
injectAsyncReducer(store, "accessTags", AccessTagCombinedReducer);

export default function AccessTags() {
  const dispatch = useDispatch();
  const tagsFilters = useSelector(selectAccessTagsFilters);

  React.useEffect(() => {
    dispatch(setSidebarActiveByLink("page/1_1"));
  }, []);

  React.useEffect(() => {
    dispatch(fetchAccessTags(tagsFilters));
  }, [tagsFilters, dispatch]);
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
              <Grid item xs={12} md={8}>
                <AccessTagsSearch />
              </Grid>
              <Grid item xs={12} md={4}>
                <AccessTagsFilters />
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
            <form>
              <AccessTagInput />
            </form>
          </Box>
        </Grid>
      </Grid>
      <AccessTagContextMenu />
      <AccessTagsHistoryWindow />
    </div>
  );
}
