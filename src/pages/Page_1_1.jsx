import { Box, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../core";
import { getAccessTags } from "../redux/slices/AccessTagsSlice";
import { selectAccessTagsFilters } from "../redux/slices/AccessTagsFilterSlice";
import translateSocketRedux from "../data/translateSocketRedux.json";
import { Header } from "../components";
import AccessTagInput from "../containers/AccessTagInput";
import AccessTagSearch from "../containers/AccessTagSearch";
export default function Tags() {
  const dispatch = useDispatch();
  const AccessTagsFilters = useSelector(selectAccessTagsFilters);
  React.useEffect(() => {}, []);

  React.useEffect(() => {
    socket.onAny((event, args) => {
      const type = translateSocketRedux[event];
      console.log("type", type);
      if (type) {
        dispatch({ type, payload: args });
      }
    });
  }, []);

  return (
    <div className="">
      <Header pageName={"Access tags"} />
      <Grid container spacing={2}>
        <Grid item md={8} xs={12} order={{ xs: 2, md: 1 }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 2,
              padding: 2,
            }}
          >
            <AccessTagSearch />
          </Box>
        </Grid>
        <Grid item md={4} xs={12} order={{ xs: 1, md: 2 }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 2,
              padding: 2,
            }}
          >
            <form>
              <AccessTagInput />
            </form>
          </Box>
        </Grid>
      </Grid>
      <button
        onClick={() => {
          socket.disconnect();
          socket.connect();
        }}
      >
        Подключить сокеты
      </button>
      <button
        onClick={() => {
          getAccessTags(AccessTagsFilters);
        }}
      >
        getTagList
      </button>
    </div>
  );
}
