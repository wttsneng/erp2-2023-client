import React from "react";
import { styled } from "@mui/material/styles";
import { MenuItem as MuiMenuItem } from "@mui/material";

const StyledMenuItem = styled(MuiMenuItem)(({ theme }) => ({
  height: "30px",
}));

function MenuItem({ ...props }) {
  return <StyledMenuItem {...props} />;
}

export default MenuItem;
