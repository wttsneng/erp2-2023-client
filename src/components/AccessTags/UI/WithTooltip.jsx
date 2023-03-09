import React from "react";
import { Tooltip } from "@mui/material";

const WithTooltip = ({ children, ...props }) => (
  <Tooltip title={props.item.name} disableInteractive arrow {...props}>
    {children}
  </Tooltip>
);

export default WithTooltip;
