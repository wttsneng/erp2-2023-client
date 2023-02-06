import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "../component";
import { Container, Box } from "@mui/material";
import { socket } from "../core";
import { useSelector } from "react-redux";
import { selectAuthStatus } from "../redux/slices/auth";
function Login() {
  const navigate = useNavigate();
  const authStatus = useSelector(selectAuthStatus);
  const handleSubmit = ({ Login, password }) => {
    socket.emit("authorisation", Login, password);
  };
  React.useEffect(() => {
    if (authStatus === "success") {
      navigate("/");
    }
  }, [authStatus]);
  return (
    <Box sx={{ height: "100%" }}>
      <Container
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <AuthForm onSubmit={handleSubmit} />
        <button onClick={() => navigate("/")}>Home</button>
      </Container>
    </Box>
  );
}

export default Login;
