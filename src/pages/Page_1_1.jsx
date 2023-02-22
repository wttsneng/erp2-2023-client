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
import AccessTagsTableFooter from "../components/AccessTags/AccessTagsTableFooter";
import { Resizable } from "react-resizable";

const ResizableComponent = () => {
  const [width, setWidth] = React.useState(200);
  const [height, setHeight] = React.useState(200);

  const handleResize = (event, { size }) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  return (
    <Resizable
      className="resizable-component"
      width={width}
      height={height}
      onResize={handleResize}
      draggableOpts={{ grid: [1, 1] }} // Sets a grid for resizing
    >
      <div className="resizable-component-content">Resizable Component</div>
    </Resizable>
  );
};

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
  }, [tagsFilters, dispatch]);

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
                  value={tagsFilters.searchValue}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <AccessTagsFilters />
              </Grid>
            </Grid>
            <AccessTagsAddDelete />
            <ResizableComponent />

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
