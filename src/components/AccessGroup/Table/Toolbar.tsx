import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid-premium";
import { Box } from "@mui/material";

import AccessGroupsTableSortByMenu from "./SortByMenu";

const AccessGroupTableToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <AccessGroupsTableSortByMenu />
      </Box>
    </GridToolbarContainer>
  );
};
export default AccessGroupTableToolbar;
