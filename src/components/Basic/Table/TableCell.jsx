import React from "react";
import MUITableCell from "@mui/material/TableCell";
import { useTheme } from "@mui/material/styles";
function TableCell({ children, ...props }) {
  const theme = useTheme();
  return (
    <MUITableCell
      sx={{
        paddingX: 1,
        paddingY: 0.2,
        borderRight: `1px solid ${theme.palette.grey[400]}  !important`,
        borderLeft: `1px solid ${theme.palette.grey[400]}  !important`,
      }}
      {...props}
    >
      {children}
    </MUITableCell>
  );
}
export default TableCell;
