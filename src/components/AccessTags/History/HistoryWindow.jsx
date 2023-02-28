import React from "react";

import { DraggableWindow } from "@src/components/Basic";
import AccessTagsHistorySearch from "./HistorySearch";
import AccessTagsMiniHistoryTable from "./MiniHistoryTable";
import AccessTagsFullHistoryTable from "./FullHistoryTable";
import AccessTagsAutoComplete from "./AutoComplete";
import AccessTagsFullHistoryFieldSelect from "./FullHistoryFieldSelect";

import { useSelector, useDispatch } from "react-redux";
import {
  selectAccessTagsHistoryWindowIsOpen,
  setAccessTagsHistoryWindowOpen,
} from "@src/redux/slices/AccessTags/historyWindow";
import {
  selectAccessTagsHistoryData,
  fetchAccessTagsHistory,
} from "@src/redux/slices/AccessTags/history";
import { selectAccessTagsHistoryFilter } from "@src/redux/slices/AccessTags/historyFilter";

function AccessTagsHistoryWindow() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectAccessTagsHistoryWindowIsOpen);
  const windowMode = useSelector(
    (state) => state.accessTags.historyWindow.mode
  );
  const data = useSelector(selectAccessTagsHistoryData);
  const filter = useSelector(selectAccessTagsHistoryFilter);

  const handleWindowClose = () => {
    dispatch(setAccessTagsHistoryWindowOpen(false));
  };
  React.useEffect(() => {
    dispatch(fetchAccessTagsHistory());
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
