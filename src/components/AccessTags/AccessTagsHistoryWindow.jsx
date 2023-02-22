import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAccessTagsHistoryWindowIsOpen,
  setAccessTagsHistoryWindowOpen,
} from "../../redux/slices/AccessTagsHistoryWindowSlice";
import { DraggableWindow } from "../Basic";
import AccessTagsHistoryTable from "./AccessTagsHistoryTable";
import {
  selectAccessTagsHistoryData,
  fetchAccessTagsHistory,
} from "../../redux/slices/AccessTagsHistorySlice";
import { setTagHistoryId } from "../../redux/slices/AccessTagsHistoryFilterSlice";
function AccessTagsHistoryWindow() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectAccessTagsHistoryWindowIsOpen);
  const data = useSelector(selectAccessTagsHistoryData);

  const handleWindowClose = () => {
    dispatch(setAccessTagsHistoryWindowOpen(false));
    dispatch(setTagHistoryId(null));
  };
  React.useEffect(() => {
    if (isOpen) {
      dispatch(fetchAccessTagsHistory());
    }
  }, [isOpen]);
  return (
    <React.Fragment>
      {isOpen && data.length !== 0 && (
        <DraggableWindow open={true} onClose={handleWindowClose}>
          <AccessTagsHistoryTable data={data} />
        </DraggableWindow>
      )}
    </React.Fragment>
  );
}

export default AccessTagsHistoryWindow;
