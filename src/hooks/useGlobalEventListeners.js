import React from "react";
import { useDispatch } from "react-redux";
import { setSelectionMode } from "@src/redux/slices/Basic/variableSlice";
const useGlobalEventListeners = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.repeat) return;
      if (event.key === "Shift") {
        dispatch(setSelectionMode("multiMany"));
      }
      if (event.key === "Control") {
        dispatch(setSelectionMode("multiOne"));
      }
    };
    const handleKeyUp = (event) => {
      if (event.key === "Shift" || event.key === "Control") {
        dispatch(setSelectionMode("single"));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [dispatch]);
};
export default useGlobalEventListeners;
