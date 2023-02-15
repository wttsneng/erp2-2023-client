import { Routes, Route } from "react-router-dom";
import React from "react";
import { MainLayout } from "./layouts";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthStatus, fetchAuthMe } from "./redux/slices/authSlice";
import { Login, ProtectedPage } from "./pages";
function App() {
  const modules = [
    { parentId: 1, childId: 1 },
    { parentId: 1, childId: 2 },
    { parentId: 2 },
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
          if (!module.childId) {
            return (
              <Route
                key={module.parentId}
                path={`/page_${module.parentId}`}
                element={
                  <MainLayout>
                    {<ProtectedPage element={`Page_${module.parentId}`} />}
                  </MainLayout>
                }
              />
            );
          }
          return (
            <Route
              key={`${module.parentId}_${module.childId}`}
              path={`/page_${module.parentId}_${module.childId}`}
              element={
                <MainLayout>
                  {
                    <ProtectedPage
                      element={`Page_${module.parentId}_${module.childId}`}
                    />
                  }
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
