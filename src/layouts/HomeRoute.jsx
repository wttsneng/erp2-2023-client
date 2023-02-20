import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setSidebarHomeActive,
  selectSidebarStatus,
} from "../redux/slices/sidebarSlice";
function HomeRoute() {
  const dispatch = useDispatch();
  const sidebarHomeLink = useSelector((state) => state.sidebar.homeLink);
  const sidebarStatus = useSelector(selectSidebarStatus);
  React.useEffect(() => {
    if (sidebarStatus === "success") {
      dispatch(setSidebarHomeActive());
    }
  }, [sidebarStatus, dispatch]);
  return (
    <React.Fragment>
      {sidebarHomeLink ? (
        <Navigate to={sidebarHomeLink} />
      ) : (
        <Navigate to="404" />
      )}
    </React.Fragment>
  );
}

export default HomeRoute;
