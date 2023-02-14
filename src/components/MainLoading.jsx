import { Box, Grid } from "@mui/material";
import { Skeleton } from "@mui/material";

function MainLoading() {
  return (
    <Box sx={{ margin: "10px 0 " }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Skeleton variant="rounded" height={300} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Skeleton variant="rounded" height={300} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Skeleton variant="rounded" height={300} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Skeleton variant="rounded" height={300} />
        </Grid>
      </Grid>
    </Box>
  );
}
export default MainLoading;
