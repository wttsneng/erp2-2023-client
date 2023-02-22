import React from "react";
import MUITable from "@mui/material/Table";
function Table({ children, ...props }) {
  return <MUITable {...props}>{children}</MUITable>;
}

export default Table;
