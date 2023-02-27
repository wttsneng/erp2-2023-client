import React from "react";

import { store } from "@src/index";
import { injectAsyncReducer } from "@src/redux/store";
import { combineReducers } from "redux";

import { Box, Grid } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { setSidebarActiveByLink } from "@src/redux/slices/Basic/sidebarSlice";

import AccessTagsSearch from "@src/components/AccessTags/AccessTagsSearch";
import AccessTagsTable from "@src/components/AccessTags/AccessTagsTable";
import AccessTagsFilters from "@src/components/AccessTags/AccessTagsFilters";
import AccessTagsToolbar from "@src/components/AccessTags/AccessTagsToolbar";
import AccessTagsTableFooter from "@src/components/AccessTags/AccessTagsTableFooter";

import { filterReducer as accessGroupFilterReducer } from "@src/redux/slices/AccessGroups/filter";
import { historyFilterReducer as accessGroupHistoryFilterReducer } from "@src/redux/slices/AccessGroups/historyFilter";
import { dataReducer as accessGroupDataReducer } from "@src/redux/slices/AccessGroups/data";
import { historyReducer as accessGroupHistoryReducer } from "@src/redux/slices/AccessGroups/history";
import { inputReducer as accessGroupInputReducer } from "@src/redux/slices/AccessGroups/input";
import { historyWindowReducer as accessGroupHistoryWindowReducer } from "@src/redux/slices/AccessGroups/historyWindow";
import { tableReducer as accessGroupTableReducer } from "@src/redux/slices/AccessGroups/table";

import { filterReducer as accessTagsFilterReducer } from "@src/redux/slices/AccessTags/filter";
import { historyFilterReducer as accessTagsHistoryFilterReducer } from "@src/redux/slices/AccessTags/historyFilter";
import { dataReducer as accessTagsDataReducer } from "@src/redux/slices/AccessTags/data";
import { historyReducer as accessTagsHistoryReducer } from "@src/redux/slices/AccessTags/history";
import { inputReducer as accessTagsInputReducer } from "@src/redux/slices/AccessTags/input";
import { historyWindowReducer as accessTagsHistoryWindowReducer } from "@src/redux/slices/AccessTags/historyWindow";
import { tableReducer as accessTagsTableReducer } from "@src/redux/slices/AccessTags/table";

const AccessGroupCombinedReducer = combineReducers({
  data: accessGroupDataReducer,
  filter: accessGroupFilterReducer,
  history: accessGroupHistoryReducer,
  historyFilter: accessGroupHistoryFilterReducer,
  input: accessGroupInputReducer,
  historyWindow: accessGroupHistoryWindowReducer,
  table: accessGroupTableReducer,
});
const AccessTagCombinedReducer = combineReducers({
  data: accessTagsDataReducer,
  filter: accessTagsFilterReducer,
  history: accessTagsHistoryReducer,
  historyFilter: accessTagsHistoryFilterReducer,
  input: accessTagsInputReducer,
  historyWindow: accessTagsHistoryWindowReducer,
  table: accessTagsTableReducer,
});
injectAsyncReducer(store, "accessGroup", AccessGroupCombinedReducer);
injectAsyncReducer(store, "accessTags", AccessTagCombinedReducer);

function Page_1_2() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setSidebarActiveByLink("page/1_2"));
  }, []);
  return (
    <Box>
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
    </Box>
  );
}

export default Page_1_2;
