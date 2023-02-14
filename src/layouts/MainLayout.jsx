import { Sidebar } from "../components";
import modulesAccess from "../data/modulesAccess";
import React from "react";
import { checkModuleAccess } from "../utils";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAuthMe,
  selectAuthData,
  selectAuthStatus,
} from "../redux/slices/authSlice";
import { Header, MainLoading } from "../components";

const MainLayout = ({ children }) => {
  const example = React.useMemo(
    () => [
      {
        name: "Accounts",
        link: "/accounts",
      },
      {
        name: "Secret",
        link: "/secret",
      },
    ],
    []
  );
  const dispatch = useDispatch();
  const authData = useSelector(selectAuthData);
  const authStatus = useSelector(selectAuthStatus);

  // const accessedModules = React.useMemo(() => {
  //   if (authStatus === "success") {
  //     const userAccessTagsArr = authData.access_group_access_tag.map(
  //       (item) => item.name
  //     );
  //     const modules = modulesAccess.data.filter((obj) => {
  //       return checkModuleAccess(obj.accessTags, userAccessTagsArr);
  //     });
  //     return modules.map((item) => {
  //       return {
  //         icon: item.icon,
  //         link: item.link,
  //         name: item.name,
  //       };
  //     });
  //   }
  //   return [];
  // }, [authStatus]);

  return (
    <div className="main-layout">
      <Sidebar arr={example} status={authStatus}>
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
