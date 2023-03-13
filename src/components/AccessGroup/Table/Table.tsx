import React from "react";
import { DataGridPremium } from "@mui/x-data-grid-premium";
import AccessGroupsTableColumns from "./Columns";
import AccessGroupTableToolbar from "./Toolbar";

import {
  useAccessGroupsSelector,
  useAccessGroupsDispatch,
} from "@src/hooks/accessGroups/useRedux";
import {
  fetchAccessGroupsDataMain,
  selectAccessGroupsDataMainData,
} from "@src/redux/slices/AccessGroups/data/main";

import { useAccessGroupsTableSort } from "@src/hooks/accessGroups";

const AccessGroupsTable = () => {
  const dispatch = useAccessGroupsDispatch();
  const [sortModel, handleSortModelChange] = useAccessGroupsTableSort();

  const data = useAccessGroupsSelector(selectAccessGroupsDataMainData);
  React.useEffect(() => {
    dispatch(fetchAccessGroupsDataMain());
  }, []);
  console.log("data", sortModel);
  return (
    <>
      <DataGridPremium
        autoHeight
        rows={data}
        columns={AccessGroupsTableColumns}
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        slots={{
          toolbar: AccessGroupTableToolbar,
        }}
      />
    </>
  );
};

export default AccessGroupsTable;
