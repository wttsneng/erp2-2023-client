import React from "react";
import MUITableContainer from "@mui/material/TableContainer";
function TableContainer({ children, ...props }) {
  return (
    <MUITableContainer
      sx={{ borderBottom: "1px solid rgba(224, 224, 224, 1)" }}
      {...props}
    >
      {children}
    </MUITableContainer>
  );
}
export default TableContainer;
