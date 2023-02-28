import React from "react";

import { TableSortLabel, Box, Paper } from "@mui/material";
import { visuallyHidden } from "@mui/utils";

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TablePagination,
} from "@src/components/Basic/Table";

import { useSelector, useDispatch } from "react-redux";
import {
  selectAccessTagsHistoryFilter,
  setAccessTagsHistorySortBy,
  setAccessTagsHistoryOrder,
  setAccessTagsTagHistoryLimit,
  setAccessTagsHistoryPage,
} from "@src/redux/slices/AccessTags/historyFilter";

const headCells = [
  { id: "field", numeric: false, label: "Field" },
  { id: "new_value", numeric: false, label: "Value" },
  { id: "createdAt", numeric: false, label: "Date" },
  { id: "user.login", numeric: false, label: "User" },
];

function AccessTagsFullHistoryTable({ data }) {
  const dispatch = useDispatch();
  const filter = useSelector(selectAccessTagsHistoryFilter);
  const historyCount = useSelector((state) => state.accessTags.history.count);

  const handleSort = (property) => {
    const isAsc = filter.sortBy === property && filter.order === "ASC";
    dispatch(setAccessTagsHistorySortBy(property));
    dispatch(setAccessTagsHistoryOrder(isAsc ? "DESC" : "ASC"));
  };
  const handleChangePage = (event, newPage) => {
    dispatch(setAccessTagsHistoryPage(newPage + 1));
  };
  const handleChangeRowsPerPage = (event) => {
    dispatch(setAccessTagsTagHistoryLimit(parseInt(event.target.value, 10)));
    dispatch(setAccessTagsHistoryPage(1));
  };
  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        padding: "0px",
        border: "1px solid rgba(224, 224, 224, 1)",
      }}
    >
      <TableContainer>
        <Table stickyHeader size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  align={headCell.numeric ? "right" : "left"}
                  sortDirection={
                    filter.sortBy === headCell.id
                      ? filter.order.toLowerCase()
                      : false
                  }
                >
                  <TableSortLabel
                    active={filter.sortBy === headCell.id}
                    direction={
                      filter.sortBy === headCell.id
                        ? filter.order.toLowerCase()
                        : "asc"
                    }
                    onClick={() => handleSort(headCell.id)}
                  >
                    {headCell.label}
                    {filter.sortBy === headCell.id ? (
                      <Box component="span" sx={visuallyHidden}>
                        {filter.order.toLowerCase() === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                hover
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.field}</TableCell>
                <TableCell>{row.new_value}</TableCell>
                <TableCell>{`${row.createdAt.split("T")[0]} ${row.createdAt
                  .split("T")[1]
                  .slice(0, 8)}`}</TableCell>
                <TableCell>{row["user.login"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[20, 50, 100]}
        count={historyCount}
        rowsPerPage={filter.limit}
        page={filter.page - 1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default AccessTagsFullHistoryTable;
