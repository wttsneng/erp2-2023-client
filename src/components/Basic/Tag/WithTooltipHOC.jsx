import React from "react";
import { Tooltip } from "@mui/material";

const WithTooltip = ({ children, ...props }) => (
  <Tooltip title={props.item.description} disableInteractive arrow {...props}>
    {children}
  </Tooltip>
);

export default WithTooltip;
