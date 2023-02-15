import { Sidebar } from "../components";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthData, selectAuthStatus } from "../redux/slices/authSlice";
import { Header, MainLoading } from "../components";
import generateSidebar from "../utils/generateSidebar";

const MainLayout = ({ children }) => {
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
      <Sidebar arr={accessedModules} status={authStatus}>
        <Header />
        {authStatus === "success" ? (
          children
        ) : authStatus === "error" ? (
          <div>Sorry, an error has occurred</div>
        ) : (
          <MainLoading />
        )}
      </Sidebar>
    </div>
  );
};
export default MainLayout;
