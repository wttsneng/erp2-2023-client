import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "../components";
import { Container, Box } from "@mui/material";
import { axios, socket } from "../core";
import { setError } from "../redux/slices/error";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAuth,
  selectAuthStatus,
  fetchAuthRefresh,
  fetchAuthMe,
} from "../redux/slices/auth";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus);

  const handleSubmit = async ({ login, password }) => {
    const data = await dispatch(fetchAuth({ login, password }));
    if (!data.payload) {
      dispatch(setError("Wrong login or password"));
      return;
    }
    if ("accessToken" in data.payload) {
      window.localStorage.setItem("token", data.payload.accessToken);
    }
    const newData = await dispatch(fetchAuthRefresh());
    if ("accessToken" in newData.payload) {
      socket.disconnect();
      window.localStorage.setItem("token", newData.payload.accessToken);
      socket.auth.token = window.localStorage.getItem("token");
      socket.connect();
    }
    dispatch(fetchAuthMe());
  };
  React.useEffect(() => {
    if (authStatus === "success") {
      navigate("/");
    }
  }, [authStatus, navigate]);
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

export default Login;
