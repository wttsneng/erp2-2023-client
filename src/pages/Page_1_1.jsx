import React from "react";
import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarActiveByLink } from "../redux/slices/sidebarSlice";
import {
  setAccessTagsSearchValue,
  selectAccessTagsFilters,
} from "../redux/slices/AccessTags/AccessTagsFilterSlice";
import { fetchAccessTags } from "../redux/slices/AccessTags/AccessTagsSlice";

import { extendReducer } from "redux-extendable-reducer";

import { Search } from "../components/Basic";
import AccessTagInput from "../components/AccessTags/AccessTagEdit";
import AccessTagsTable from "../components/AccessTags/AccessTagsTable";
import AccessTagsFilters from "../components/AccessTags/AccessTagsFilters";
import AccessTagsAddDelete from "../components/AccessTags/AccessTagsAddDelete";
import AccessTagsHistoryWindow from "../components/AccessTags/AccessTagsHistoryWindow";
import AccessTagsTableFooter from "../components/AccessTags/AccessTagsTableFooter";

export default function Tags() {
  const dispatch = useDispatch();
  const tagsFilters = useSelector(selectAccessTagsFilters);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const onSearch = (value) => {
    dispatch(setAccessTagsSearchValue(value));
  };

  React.useEffect(() => {
    import("../redux/slices/AccessTags/AccessTagsFilterSlice").then(
      (module) => {
        dispatch(
          extendReducer({ accessTagsFilter: module.AccessTagsFilterReducer })
        );
      }
    );
    import("../redux/slices/AccessTags/AccessTagsSlice").then((module) => {
      dispatch(extendReducer({ accessTags: module.AccessTagsReducer }));
    });
    import("../redux/slices/AccessTags/AccessTagsHistorySlice").then(
      (module) => {
        dispatch(
          extendReducer({ accessTagsHistory: module.AccessTagsHistoryReducer })
        );
      }
    );
    import("../redux/slices/AccessTags/AccessTagsHistoryFilterSlice").then(
      (module) => {
        dispatch(
          extendReducer({
            accessTagsHistoryFilter: module.AccessTagsHistoryFilterReducer,
          })
        );
      }
    );
    import("../redux/slices/AccessTags/AccessTagsHistoryWindowSlice").then(
      (module) => {
        dispatch(
          extendReducer({
            accessTagsHistoryWindow: module.AccessTagsHistoryWindowReducer,
          })
        );
      }
    );
    import("../redux/slices/AccessTags/AccessTagsInputSlice").then((module) => {
      dispatch(
        extendReducer({ accessTagsInput: module.AccessTagsInputReducer })
      );
    });
    import("../redux/slices/AccessTags/AccessTagsTableSlice").then((module) => {
      dispatch(
        extendReducer({ accessTagsTable: module.AccessTagsTableReducer })
      );
    });
    setIsLoaded(true);
    dispatch(setSidebarActiveByLink("page/1_1"));
  }, []);

  React.useEffect(() => {
    dispatch(fetchAccessTags(tagsFilters));
  }, [tagsFilters, dispatch]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
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
