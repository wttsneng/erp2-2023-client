import { Box, Typography } from "@mui/material";
import React from "react";
function Sidebar({ isMini, setIsMini, children }) {
  const someBlock = (
    <Box
      className="children"
      sx={{
        padding: "10px 0",
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Typography
          className="fa-solid fa-house"
          sx={{
            display: "block",
            marginRight: "10px",
          }}
        ></Typography>
        <span>SomeBlock</span>
      </div>
      <Typography
        className="fa-solid fa-chevron-down"
        style={{ display: "block" }}
      ></Typography>
    </Box>
  );
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        maxWidth: "230px",
        width: "100%",
        backgroundColor: "red",
        height: "100%",
        zIndex: 100,
        transition: "all 0.3s ease",
        padding: "30px",
      }}
    >
      {new Array(10).fill(someBlock)}
    </Box>
  );
}
export default Sidebar;
