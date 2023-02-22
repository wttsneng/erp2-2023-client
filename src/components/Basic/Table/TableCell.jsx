import React from "react";
import MUITableCell from "@mui/material/TableCell";
function TableCell({ children, ...props }) {
  return <MUITableCell {...props}>{children}</MUITableCell>;
}
export default TableCell;
