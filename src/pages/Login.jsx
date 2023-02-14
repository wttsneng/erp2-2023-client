import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { AuthForm } from "../components";
import { useNavigate } from "react-router-dom";
import {
  selectAuthStatus,
  fetchAuth,
  fetchAuthMe,
  fetchAuthRefresh,
} from "../redux/slices/authSlice";
import { Container, Box } from "@mui/material";
import { socket } from "../core";
export default function Login() {
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus);
  const navigate = useNavigate();

  const handleSubmit = async ({ login, password }) => {
    const data = await dispatch(fetchAuth({ login, password }));
    if (typeof window !== "undefined") {
      window.localStorage.setItem("token", data.payload.accessToken);
    }
    const newData = await dispatch(fetchAuthRefresh());
    if (newData?.payload?.accessToken) {
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
  }, [authStatus]);
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Домой
      </button>
      <p>Boss of the something</p>
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
    </div>
  );
}
