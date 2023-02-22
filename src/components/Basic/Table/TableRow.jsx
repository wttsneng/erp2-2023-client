import React from "react";
import MUITableRow from "@mui/material/TableRow";
function TableRow({ children, ...props }) {
  return <MUITableRow {...props}>{children}</MUITableRow>;
}
export default TableRow;
