import React from "react";
import MUITablePagination from "@mui/material/TablePagination";
import { Box } from "@mui/system";
function TablePagination({ ...props }) {
  return (
    <MUITablePagination
      component={Box}
      sx={{
        margin: 0,
        padding: 0,
        minHeight: 0,
        "& *": {
          margin: 0,
          paddingY: 0,
          minHeight: "10px !important",
        },
        "& .MuiButtonBase-root": {
          padding: 0,
          marginY: 0,
        },
        "& .MuiSelect-select": {
          paddingY: 0,
          marginY: 0,
        },
        "& .MuiTablePagination-spacer": {
          paddingY: 0,
        },
      }}
      {...props}
    />
  );
}

export default TablePagination;
