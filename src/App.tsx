import React, { FC } from "react";

import { Routes, Route } from "react-router-dom";

import { socket } from "./core";

import { useGlobalEventListeners, useSocketError } from "./hooks";
import { useAccessTagsSocketEvents } from "./hooks/accessTags/useAccessTagsSocketEvents";

import { MainLayout, AuthProtect, HomeRoute, ProtectedRoutes } from "./layouts";

import { useAppDispatch, useAppSelector } from "@src/hooks/redux";
import {
  selectAuthStatus,
  selectAuthData,
  fetchAuthMe,
} from "./redux/slices/Basic/authSlice";
import { setSidebarData } from "./redux/slices/Basic/sidebarSlice";

import { Login, NotFound } from "./pages";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(selectAuthStatus);
  const authData = useAppSelector(selectAuthData);
  useGlobalEventListeners();
  useSocketError();
  useAccessTagsSocketEvents();

  React.useEffect(() => {
    if (authStatus === "idle") {
      dispatch(fetchAuthMe());
    }
    if (authStatus === "success") {
      dispatch(setSidebarData(authData.uimodules));
      if (socket.disconnected) {
        socket.connect();
      }
    }
  }, [authStatus]);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<AuthProtect authStatus={authStatus} />}>
          <Route path="/*" element={<MainLayout />}>
            <Route index element={<HomeRoute />} />
            {authStatus === "success" && (
              <Route
                path="page/*"
                element={<ProtectedRoutes uiModules={authData.uimodules} />}
              />
            )}
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
