import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAccessTagsHistoryWindowIsOpen,
  setAccessTagsHistoryWindowOpen,
} from "../../redux/slices/AccessTagsHistoryWindowSlice";
import DraggableWindow from "../Windows/DraggableWindow";
import { selectAccessTagsHistoryData } from "../../redux/slices/AccessTagsHistorySlice";
import { setTagHistoryId } from "../../redux/slices/AccessTagsHistoryFilterSlice";
import HistoryTable from "../HistoryTable";
function AccessTagsHistoryWindow() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectAccessTagsHistoryWindowIsOpen);
  const data = useSelector(selectAccessTagsHistoryData);

  const handleWindowClose = () => {
    dispatch(setAccessTagsHistoryWindowOpen(false));
    dispatch(setTagHistoryId(null));
  };
  return (
    <React.Fragment>
      {isOpen && data.length !== 0 && (
        <DraggableWindow open={true} onClose={handleWindowClose}>
          <HistoryTable data={data} />
        </DraggableWindow>
      )}
    </React.Fragment>
  );
}

export default AccessTagsHistoryWindow;
