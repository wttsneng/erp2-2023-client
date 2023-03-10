import React from "react";

import { Box as MuiBox } from "@mui/material";
import { styled } from "@mui/material/styles";

const Box = styled(MuiBox)(({ theme }) =>
  theme.unstable_sx({
    backgroundColor: "white",
    borderRadius: 1,
    padding: 2,
  })
);

const BoxDefault = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return <Box {...props}>{children}</Box>;
};

export default BoxDefault;
