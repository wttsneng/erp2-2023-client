import React from "react";
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";
import { Home, Login } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { selectError, setErrorClose } from "./redux/slices/error";
import { fetchAuthMe } from "./redux/slices/auth";
import { socket } from "./core";
import { MySnackbar } from "./components";
// import
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { errorMessage, opened: isErrorOpen } = useSelector(selectError);
  React.useEffect(() => {
    if (localStorage.getItem("path")) {
      navigate(localStorage.getItem("path"));
    }
  }, []);
  React.useEffect(() => {
    console.log(location.pathname);
    localStorage.setItem("path", location.pathname);
  }, [location.pathname]);
  React.useEffect(() => {
    dispatch(fetchAuthMe());
    socket.connect();
  }, [dispatch]);
  return (
    <div className="App">
      <MySnackbar
        open={isErrorOpen}
        onClose={() => dispatch(setErrorClose())}
        severity="error"
        message={errorMessage}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
