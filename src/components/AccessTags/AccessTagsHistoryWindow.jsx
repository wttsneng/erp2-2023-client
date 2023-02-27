import React from "react";

import { DraggableWindow } from "../Basic";

import { useSelector, useDispatch } from "react-redux";
import {
  selectHistoryWindowIsOpen as selectAccessTagsHistoryWindowIsOpen,
  setHistoryWindowOpen as setAccessTagsHistoryWindowOpen,
} from "@src/redux/slices/AccessTags/historyWindow";
import AccessTagsHistoryTable from "./AccessTagsHistoryTable";
import {
  selectHistoryData as selectAccessTagsHistoryData,
  fetchHistory as fetchAccessTagsHistory,
} from "@src/redux/slices/AccessTags/history";

import { setTagHistoryId } from "@src/redux/slices/AccessTags/historyFilter";

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
