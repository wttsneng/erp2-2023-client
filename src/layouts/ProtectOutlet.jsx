import { Outlet, Navigate } from "react-router-dom";
import React from "react";

function ProtectOutlet() {
  const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectOutlet;
