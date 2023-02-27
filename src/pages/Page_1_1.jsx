import React from "react";
import { Box, Grid } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { setSidebarActiveByLink } from "@src/redux/slices/Basic/sidebarSlice";
import {
  setSearchValue as setAccessTagsSearchValue,
  selectFilters as selectAccessTagsFilters,
} from "@src/redux/slices/AccessTags/filter";

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

import { Search } from "@src/components/Basic";
import AccessTagInput from "@src/components/AccessTags/AccessTagEdit";
import AccessTagsTable from "@src/components/AccessTags/AccessTagsTable";
import AccessTagsFilters from "@src/components/AccessTags/AccessTagsFilters";
import AccessTagsAddDelete from "@src/components/AccessTags/AccessTagsAddDelete";
import AccessTagsHistoryWindow from "@src/components/AccessTags/AccessTagsHistoryWindow";
import AccessTagsTableFooter from "@src/components/AccessTags/AccessTagsTableFooter";

const AccessTag = combineReducers({
  data: dataReducer,
  filter: filterReducer,
  history: historyReducer,
  historyFilter: historyFilterReducer,
  input: inputReducer,
  historyWindow: historyWindowReducer,
  table: tableReducer,
});

export default function Tags() {
  const dispatch = useDispatch();
  const tagsFilters = useSelector(selectAccessTagsFilters);
  const [isPageLoaded, setIsPageLoaded] = React.useState(false);

  const onSearch = (value) => {
    dispatch(setAccessTagsSearchValue(value));
  };

  React.useEffect(() => {
    injectAsyncReducer(store, "accessTags", AccessTag);
    dispatch(setSidebarActiveByLink("page/1_1"));
    setIsPageLoaded(true);
  }, []);

  React.useEffect(() => {
    if (isPageLoaded) {
      dispatch(fetchAccessTags(tagsFilters));
    }
  }, [tagsFilters, dispatch, isPageLoaded]);
  if (!isPageLoaded) return <div>Loading...</div>;
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
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Search
                  onChange={onSearch}
                  label="Access tags search"
                  // value={tagsFilters.searchValue}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <AccessTagsFilters />
              </Grid>
            </Grid>
            <AccessTagsAddDelete />
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
    </div>
  );
}
