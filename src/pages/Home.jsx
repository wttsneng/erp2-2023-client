import React from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components";
import { selectAuthData, selectAuthStatus } from "../redux/slices/auth";
import { useSelector, useDispatch } from "react-redux";
import { fetchAuthLogout } from "../redux/slices/auth";
function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus);
  const authData = useSelector(selectAuthData);
  const handleLogout = () => {
    dispatch(fetchAuthLogout());
    window.localStorage.removeItem("token");
  };
  React.useEffect(() => {
    if (authStatus === "error") {
      navigate("/login");
    }
  }, [authStatus]);
  return (
    <div>
      {/* <h1>Home</h1> */}
      <Sidebar />
      {authStatus === "success" && `Привет, ${authData.login}`}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
export default Home;
