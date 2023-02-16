import { Sidebar } from "../components";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthData, selectAuthStatus } from "../redux/slices/authSlice";
import { MainLoading } from "../components";
import { Outlet, Navigate } from "react-router-dom";
import generateSidebar from "../utils/generateSidebar";
import { GeneratedProtectedPage } from "../pages";

const MainLayout = () => {
  const dispatch = useDispatch();
  const authData = useSelector(selectAuthData);
  const authStatus = useSelector(selectAuthStatus);

  const accessedModules = React.useMemo(() => {
    const resultArr = [];
    if (authStatus === "success") {
      authData.access_group_access_tag.forEach(async (item) => {
        if (item.name.split(".")[0] === "#UIM") {
          const moduleInfo = await import(
            `../data/SidebarInfo${item.name.split(".")[1]}.json`
          ).then((res) => res.default.data);
          const ParentId = item.name.split(".")[1];
          const ChildId = item.name.split(".")[2];
          const child = item.name.split(".")[4];
          generateSidebar(moduleInfo, ParentId, ChildId, child, resultArr);
        }
      });
      return resultArr;
    }
    return [];
  }, [authStatus, authData]);

  return (
    <div className="main-layout">
      {!window.localStorage.getItem("token") || authStatus === "error" ? (
        <Navigate to="/login" />
      ) : (
        <Sidebar arr={accessedModules} status={authStatus}>
          {authStatus === "success" ? <Outlet /> : <MainLoading />}
        </Sidebar>
      )}
    </div>
  );
};
export default MainLayout;
