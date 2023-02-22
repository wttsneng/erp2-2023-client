import React from "react";
import MUITableBody from "@mui/material/TableBody";
function TableBody({ children, ...props }) {
  return <MUITableBody {...props}>{children}</MUITableBody>;
}
export default TableBody;
