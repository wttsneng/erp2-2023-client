import React from "react";
import {
  DataGridPremium,
  GridToolbar,
  GridColumnMenuProps,
  GridColumnMenu,
  useGridApiRef,
} from "@mui/x-data-grid-premium";

const rows = [
  { id: 1, col1: "Hello", col2: "World", disabled: true },
  { id: 2, col1: "DataGrid", col2: "is Awesome" },
  { id: 3, col1: "MUI", col2: "is Amazing" },
];

function customColumnMenu(props: GridColumnMenuProps) {
  return (
    <GridColumnMenu
      {...props}
      components={{
        ColumnMenuAggregationItem: null,
        ColumnMenuGroupingItem: null,
        ColumnMenuPinningItem: null,
      }}
    />
  );
}
const columns = [
  {
    field: "col1",
    headerName: "Name",
    description: "Name of the Access Group",
    flex: 1,
    resizable: true,
    editable: true,
  },
  {
    field: "col2",
    headerName: "Description",
    description: "Description of the Access Group",
    flex: 1,
    resizable: true,
    editable: true,
    cellClassName: (params: any) => (params.row.disabled ? "b" : ""),
  },
];
const AccessGroupsTable = () => {
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
  console.log(rowSelectionModel);
  return (
    <div
      style={{
        height: 400,
      }}
    >
      <DataGridPremium
        rows={rows}
        columns={columns}
        rowHeight={30}
        pagination
        components={{ Toolbar: GridToolbar }}
        // onRowSelectionModelChange={(newRowSelectionModel) => {
        //   if (newRowSelectionModel) {
        //     setRowSelectionModel(newRowSelectionModel);
        //   }
        // }}
        // rowSelectionModel={rowSelectionModel}
        // onCellEditStart={(params, event) => {
        //   console.log(params, event.detail);
        // }}
        // slots={{
        //   columnMenu: customColumnMenu,
        // }}
      />
    </div>
  );
};

export default AccessGroupsTable;
