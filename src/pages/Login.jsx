import React from "react";
import { AuthForm } from "../components/Basic";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAuthStatus, fetchAuthMe } from "../redux/slices/authSlice";
import { Container, Box } from "@mui/material";
import { socket, axios } from "../core";
export default function Login() {
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus);
  const navigate = useNavigate();

  const handleSubmit = async ({ login, password }) => {
    try {
      const { data } = await axios.post("/api/auth/login", { login, password });
      window.localStorage.setItem("token", data.accessToken);
      socket.auth.token = window.localStorage.getItem("token");
      socket.connect();
      dispatch(fetchAuthMe());
    } catch (error) {
      console.log(error);
    }
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
      </Container>
    </Box>
  );
}
