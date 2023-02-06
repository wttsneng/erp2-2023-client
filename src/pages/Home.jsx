import React from "react";
import { useNavigate } from "react-router-dom";
import { selectAuthData, selectAuthStatus } from "../redux/slices/auth";
import { useSelector } from "react-redux";
function Home() {
  const navigate = useNavigate();
  const authStatus = useSelector(selectAuthStatus);
  const authData = useSelector(selectAuthData);
  return (
    <div>
      <h1>Home</h1>
      {authStatus === "success" && `Привет, ${authData.username}`}
      {authStatus === "success" && authData.programs && (
        <div>
          Модули:{" "}
          {authData.programs.map((i) => {
            return <div>{i}</div>;
          })}
        </div>
      )}
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
}
export default Home;
