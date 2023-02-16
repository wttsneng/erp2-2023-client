import React from "react";
import ProtectedPage from "./ProtectedPage";
import { Route } from "react-router-dom";
function GeneratedProtectedPage({ authData }) {
  const pages = React.useMemo(() => {
    const resultArr = [];
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
    return resultArr;
  }, [authData]);
  return (
    <div className="something">
      <React.Fragment>
        {pages.length !== 0 &&
          pages.map((page) => {
            if (page.childId) {
              return (
                <Route
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
                path={`page/${page.parentId}`}
                element={<ProtectedPage element={`Page_${page.parentId}`} />}
              />
            );
          })}
      </React.Fragment>
    </div>
  );
}

export default GeneratedProtectedPage;
// {state: true, name: '#UIM.1.1.Accounts.Tags', access_tag_id: 1}
// {state: true, name: '#Account.AccessTag', access_tag_id: 2}
// {state: true, name: '#Account.AccessGroup', access_tag_id: 3}
