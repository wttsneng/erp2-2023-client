import React from "react";

import { Grid as MuiGrid, Box, Stack } from "@mui/material";
import { useTheme } from "@emotion/react";
import { styled } from "@mui/material/styles";

import { AccessTagsHistoryFiltersPagination } from "@src/components/AccessTags";

import { useDispatch, useSelector } from "react-redux";
import {
  selectAccessTagsHistoryDataMain,
  selectAccessTagsHistoryDataMainStatus,
} from "@src/redux/slices/AccessTags/history/data/main";
import { selectAccessTagsHistoryWindowsMainWidth } from "@src/redux/slices/AccessTags/history/windows/main";

const Grid = styled(MuiGrid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 1,
  margin: 0,
}));

function AccessTagsHostoryTablesMobileFull() {
  const theme = useTheme();
  const windowWidth = useSelector(selectAccessTagsHistoryWindowsMainWidth);
  const historyData = useSelector(selectAccessTagsHistoryDataMain);
  const historyStatus = useSelector(selectAccessTagsHistoryDataMainStatus);
  if (historyStatus !== "success" || windowWidth > 900) return <></>;
  const columnsCount = windowWidth < 600 ? 12 : 6;
  return (
    <Box
      sx={{
        maxHeight: `calc(100% - 110px)`,
      }}
    >
      <Stack
        spacing={2}
        sx={{
          justifyContent: "start",
          alignItems: "start",
          height: "100%",
          overflow: "scroll",
          overflowX: "hidden",
        }}
      >
        {historyData.map((row) => (
          <Grid
            container
            spacing={1}
            key={row.id}
            sx={{
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 1,
              margin: 0,
            }}
          >
            <Grid item xs={columnsCount}>
              {`Field - ${row.field}`}
            </Grid>
            <Grid item xs={columnsCount}>
              {`Access Tag - ${row["access_tag.name"]}`}
            </Grid>
            <Grid item xs={columnsCount}>
              {`Value - ${row.new_value}`}
            </Grid>
            <Grid item xs={columnsCount}>
              {`Date - ${row.updatedAt}`}
            </Grid>
            <Grid item xs={columnsCount}>
              {`User - ${row["user.login"]}`}
            </Grid>
          </Grid>
        ))}
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AccessTagsHistoryFiltersPagination />
      </Box>
    </Box>
  );
}

export default AccessTagsHostoryTablesMobileFull;
