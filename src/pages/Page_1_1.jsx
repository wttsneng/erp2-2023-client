import React from "react";

import { socket } from "../core";

import { Box, Grid } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { setSidebarActiveByLink } from "../redux/slices/sidebarSlice";
import {
  setAccessTagsSearchValue,
  selectAccessTagsFilters,
} from "../redux/slices/AccessTagsFilterSlice";
import { getAccessTags } from "../redux/slices/AccessTagsSlice";

import translateSocketRedux from "../data/translateSocketRedux.json";

import AccessTagInput from "../components/AccessTags/AccessTagEdit";
import Search from "../components/Search";
import AccessTagsTable from "../components/AccessTags/AccessTagsTable";
import AccessTagsFilters from "../components/AccessTags/AccessTagsFilters";
import AccessTagsAddDelete from "../components/AccessTags/AccessTagsAddDelete";

export default function Tags() {
  const dispatch = useDispatch();
  const tagsFilters = useSelector(selectAccessTagsFilters);

  const onSearch = (value) => {
    dispatch(setAccessTagsSearchValue(value));
  };

  React.useEffect(() => {
    dispatch(setSidebarActiveByLink("page/1_1"));
    socket.disconnect();
    socket.connect();
  }, []);

  React.useEffect(() => {
    socket.onAny((event, args) => {
      const type = translateSocketRedux[event];
      console.log("type", type);
      if (type) {
        dispatch({ type, payload: args });
      }
    });
  }, []);

  React.useEffect(() => {
    getAccessTags(tagsFilters);
  }, [tagsFilters]);

  return (
    <div className="">
      <Grid container spacing={2}>
        <Grid item md={8} xs={12} order={{ xs: 2, md: 1 }}>
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <AccessTagsFilters />
              <AccessTagsAddDelete />
            </Box>
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
