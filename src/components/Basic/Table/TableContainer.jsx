import React from "react";
import MUITableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
function TableContainer({ children, ...props }) {
  return (
    <MUITableContainer {...props} component={Paper}>
      {children}
    </MUITableContainer>
  );
}
export default TableContainer;
