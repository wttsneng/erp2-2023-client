import React from "react";

import { DraggableWindow } from "@src/components/Basic";
import AccessTagsHistorySearch from "./AccessTagsHistorySearch";
import AccessTagsMiniHistoryTable from "./AccessTagsMiniHistoryTable";
import AccessTagsFullHistoryTable from "./AccessTagsFullHistoryTable";
import AccessTagsAutoComplete from "./AccessTagsAutoComplete";
import AccessTagsFullHistoryFieldSelect from "./AccessTagsFullHistoryFieldSelect";

import { useSelector, useDispatch } from "react-redux";
import {
  selectHistoryWindowIsOpen as selectAccessTagsHistoryWindowIsOpen,
  setHistoryWindowOpen as setAccessTagsHistoryWindowOpen,
} from "@src/redux/slices/AccessTags/historyWindow";
import {
  selectHistoryData as selectAccessTagsHistoryData,
  fetchHistory,
} from "@src/redux/slices/AccessTags/history";
import { selectHistoryFilter } from "@src/redux/slices/AccessTags/historyFilter";

function AccessTagsHistoryWindow() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectAccessTagsHistoryWindowIsOpen);
  const windowMode = useSelector(
    (state) => state.accessTags.historyWindow.mode
  );
  const data = useSelector(selectAccessTagsHistoryData);
  const filter = useSelector(selectHistoryFilter);

  const handleWindowClose = () => {
    dispatch(setAccessTagsHistoryWindowOpen(false));
  };
  React.useEffect(() => {
    dispatch(fetchHistory());
  }, [filter, dispatch]);
  return (
    <React.Fragment>
      {isOpen && (
        <DraggableWindow
          open={true}
          onClose={handleWindowClose}
          isFull={windowMode !== "mini"}
        >
          <AccessTagsHistorySearch />
          {windowMode === "mini" ? (
            <AccessTagsMiniHistoryTable data={data} />
          ) : (
            <>
              <AccessTagsAutoComplete />
              <AccessTagsFullHistoryFieldSelect />
              <AccessTagsFullHistoryTable data={data} />
            </>
          )}
        </DraggableWindow>
      )}
    </React.Fragment>
  );
}

export default AccessTagsHistoryWindow;
