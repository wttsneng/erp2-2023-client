import { Sidebar, Header } from "../components";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
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
