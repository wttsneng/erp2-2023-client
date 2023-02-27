import { Sidebar, Header } from "../components/Basic";
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const MainLayout = () => {
  if (!window.localStorage.getItem("token")) return <Navigate to="/login" />;
  return (
    <div className="main-layout">
      <Sidebar>
        <Header />
        <Outlet />
      </Sidebar>
    </div>
  );
};
export default MainLayout;
