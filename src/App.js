import React from "react";

import { Routes, Route } from "react-router-dom";

import { socket } from "./core";

import { MainLayout, AuthProtect, HomeRoute, ProtectedRoutes } from "./layouts";

import { useSelector, useDispatch } from "react-redux";
import {
  selectAuthStatus,
  selectAuthData,
  fetchAuthMe,
} from "./redux/slices/authSlice";
import { setSidebarData } from "./redux/slices/sidebarSlice";

import { Login, NotFound } from "./pages";

function App() {
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus);
  const authData = useSelector(selectAuthData);
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

  React.useEffect(() => {
    socket.onAny((event, ...args) => {
      dispatch({ type: event, payload: args[0] });
    });
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<MainLayout />}>
          <Route path="*" element={<AuthProtect authStatus={authStatus} />}>
            <Route index element={<HomeRoute />} />
            <Route
              path="page/*"
              element={
                <ProtectedRoutes
                  uiModules={authStatus === "success" && authData.uimodules}
                />
              }
            />
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
