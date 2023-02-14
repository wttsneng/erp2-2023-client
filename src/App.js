import { Routes, Route } from "react-router-dom";
import React from "react";
import { MainLayout } from "./layouts";
import { Login, ProtectedPage, Secret } from "./pages";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthStatus, fetchAuthMe } from "./redux/slices/authSlice";
function App() {
  const modules = [
    { name: "Accounts", path: "/accounts" },
    { name: "Secret", path: "/secret" },
  ];
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus);
  React.useEffect(() => {
    if (authStatus === "idle") {
      dispatch(fetchAuthMe());
    }
  }, [authStatus]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <div>Home</div>
            </MainLayout>
          }
        />
        <Route path="/login" element={<Login />} />
        {modules.map((module) => {
          return (
            <Route
              key={module.path}
              path={module.path}
              element={
                <MainLayout>
                  <ProtectedPage element={module.name} />
                </MainLayout>
              }
            />
          );
        })}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
