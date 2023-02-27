import React from "react";
import MUITable from "@mui/material/Table";
function Table({ children, ...props }) {
  return (
    <MUITable
      sx={{ borderBottom: "1px solid #000" }}
      size="small"
      aria-label="a dense table"
      {...props}
    >
      {children}
    </MUITable>
  );
}

export default Table;
