import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function AuthProtect({ authStatus }) {
  if (!window.localStorage.getItem("token")) {
    return <Navigate to="login" />;
  }
  if (authStatus === "success") {
    return <Outlet />;
  }
  if (authStatus === "idle" || authStatus === "loading") {
    return <> </>;
  } else {
    return <Navigate to="login" />;
  }
}

export default AuthProtect;
