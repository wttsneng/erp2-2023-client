import { Routes, Route } from "react-router-dom";
import React from "react";
import { MainLayout } from "./layouts";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAuthStatus,
  selectAuthData,
  fetchAuthMe,
} from "./redux/slices/authSlice";
import { Login, ProtectedPage, NotFound } from "./pages";
import Tags from "./pages/Page_1_1";
function App() {
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus);
  const authData = useSelector(selectAuthData);

  const pages = React.useMemo(() => {
    const resultArr = [];
    if (authStatus === "success") {
      authData.access_group_access_tag.forEach(async (item) => {
        if (item.name.split(".")[0] === "#UIM") {
          if (Number(item.name.split(".")[2])) {
            resultArr.push({
              parentId: item.name.split(".")[1],
              childId: item.name.split(".")[2],
            });
          } else {
            resultArr.push({
              parentId: item.name.split(".")[1],
            });
          }
        }
      });
    }
    return resultArr;
  }, [authData]);

  React.useEffect(() => {
    if (authStatus === "idle") {
      dispatch(fetchAuthMe());
    }
  }, [authStatus]);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<MainLayout />}>
          {pages.length !== 0 &&
            pages.map((page) => {
              if (page.childId) {
                return (
                  <Route
                    key={`page/${page.parentId}_${page.childId}`}
                    path={`page/${page.parentId}_${page.childId}`}
                    element={
                      <ProtectedPage
                        element={`Page_${page.parentId}_${page.childId}`}
                      />
                    }
                  />
                );
              }
              return (
                <Route
                  key={`page/${page.parentId}`}
                  path={`page/${page.parentId}`}
                  element={<ProtectedPage element={`Page_${page.parentId}`} />}
                />
              );
            })}
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
