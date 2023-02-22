import React from "react";
import MUITableHead from "@mui/material/TableHead";
function TableHead({ children, props }) {
  return <MUITableHead {...props}>{children}</MUITableHead>;
}
export default TableHead;
