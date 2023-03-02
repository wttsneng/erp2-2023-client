import React from "react";
import ErrorAlert from "./Error";

import { useSelector, useDispatch } from "react-redux";
import { selectAlert, setAlertOpen } from "@src/redux/slices/Basic/alertSlice";
function AlertsGlobal() {
  const dispatch = useDispatch();
  const alertData = useSelector(selectAlert);
  return (
    <>
      {alertData.type === "error" && (
        <ErrorAlert
          open={alertData.isOpen}
          position={alertData.position}
          message={alertData.data}
          onClose={() => dispatch(setAlertOpen(false))}
        />
      )}
    </>
  );
}

export default AlertsGlobal;
