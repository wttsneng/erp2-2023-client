import React from "react";
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";
import { Home, Login } from "./pages";
import { socket } from "./core";
import { convertSocketMessage } from "./utils";
import { useDispatch, useSelector } from "react-redux";
import { selectError, setErrorClose } from "./redux/slices/error";
import { MySnackbar } from "./component";
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
    socket.onAny((event, ...args) => {
      console.log({
        type: String(convertSocketMessage(event)),
        payload: { ...args },
      });
      dispatch({
        type: String(convertSocketMessage(event)),
        payload: { ...args },
      });
    });
  }, []);
  React.useEffect(() => {
    console.log(location.pathname);
    localStorage.setItem("path", location.pathname);
  }, [location.pathname]);
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
