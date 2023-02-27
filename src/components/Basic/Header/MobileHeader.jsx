import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
function MobileHeader({ onClick, pageName }) {
  return (
    <AppBar position="fixed" sx={{ display: { md: "none" } }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => {
            onClick();
          }}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {pageName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default MobileHeader;
