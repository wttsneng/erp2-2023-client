import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedPage from "../pages/ProtectedPage";
function ProtectedRoutes({ uiModules }) {
  function findLinks(data) {
    const result = [];

    function traverse(element) {
      if (element.link) {
        result.push(element.link);
      }
      if (element.items) {
        for (const childElement of element.items) {
          traverse(childElement);
        }
      }
    }

    for (const element of data) {
      traverse(element);
    }
    return result;
  }
  const links = findLinks(uiModules);
  return (
    <Routes>
      {links.length > 0 &&
        links.map((link, index) => (
          <Route
            key={index}
            path={`/${link.split("/")[1]}`}
            element={<ProtectedPage element={link.split("/")[1]} />}
          />
        ))}
    </Routes>
  );
}

export default ProtectedRoutes;
