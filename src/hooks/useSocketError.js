import { socket } from "@src/core";
import { useDispatch } from "react-redux";
import {
  setAlertOpen,
  setAlertData,
  setAlertType,
} from "@src/redux/slices/Basic/alertSlice";
import React from "react";
function useSocketError() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    socket.on("error", (err) => {
      dispatch(setAlertOpen(true));
      dispatch(setAlertData(err));
      dispatch(setAlertType("error"));
    });
    return () => {
      socket.off("error");
    };
  }, []);
}

export default useSocketError;
