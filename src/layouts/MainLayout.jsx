import { Sidebar, Header, AlertsGlobal } from "../components/Basic";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Sidebar>
        <Header />
        <Outlet />
      </Sidebar>
      <AlertsGlobal />
    </div>
  );
};
export default MainLayout;
