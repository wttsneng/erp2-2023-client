import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

function NotFound() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 88px)",
        fontSize: "2rem",
        fontWeight: "bold",
      }}
    >
      <Typography sx={{ display: "block" }}>404 Not Found</Typography>
      <Button
        variant="contained"
        sx={{ marginLeft: "1rem" }}
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </Button>
    </Box>
  );
}

export default NotFound;
