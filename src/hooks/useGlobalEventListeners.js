import React from "react";
import { useDispatch } from "react-redux";
import { setAccessTagsSelectedMode } from "@src/redux/slices/AccessTags/selected";

const useGlobalEventListeners = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.repeat) return;
      if (event.key === "Shift") {
        dispatch(setAccessTagsSelectedMode("multiMany"));
      }
      if (event.key === "Control") {
        dispatch(setAccessTagsSelectedMode("multiOne"));
      }
    };
    const handleKeyUp = (event) => {
      if (event.key === "Shift" || event.key === "Control") {
        dispatch(setAccessTagsSelectedMode("single"));
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
