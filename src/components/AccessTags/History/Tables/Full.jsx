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
  selectAccessTagsHistoryFiltersMainFilter,
  setAccessTagsHistoryFiltersMainSortBy,
  setAccessTagsHistoryFiltersMainOrder,
  setAccessTagsHistoryFiltersMainLimit,
  setAccessTagsHistoryFiltersMainPage,
} from "@src/redux/slices/AccessTags/history/filters/main";
import {
  selectAccessTagsHistoryDataMain,
  selectAccessTagsHistoryDataMainStatus,
} from "@src/redux/slices/AccessTags/history/data/main";

const headCells = [
  { id: "field", numeric: false, label: "Field" },
  { id: "access_tag.name", numeric: false, label: "Access Tag" },
  { id: "new_value", numeric: false, label: "Value" },
  { id: "createdAt", numeric: false, label: "Date" },
  { id: "user.login", numeric: false, label: "User" },
];

function AccessTagsHistoryTablesFull() {
  const dispatch = useDispatch();
  const filter = useSelector(selectAccessTagsHistoryFiltersMainFilter);
  const historyCount = useSelector((state) => state.accessTags.history.count);
  const historyData = useSelector(selectAccessTagsHistoryDataMain);
  const historyStatus = useSelector(selectAccessTagsHistoryDataMainStatus);

  const handleSort = (property) => {
    const isAsc = filter.sortBy === property && filter.orderBy.value === "ASC";
    dispatch(setAccessTagsHistoryFiltersMainSortBy(property));
    dispatch(setAccessTagsHistoryFiltersMainOrder(isAsc ? "DESC" : "ASC"));
  };
  const handleChangePage = (event, newPage) => {
    dispatch(setAccessTagsHistoryFiltersMainPage(newPage + 1));
  };
  const handleChangeRowsPerPage = (event) => {
    dispatch(
      setAccessTagsHistoryFiltersMainLimit(parseInt(event.target.value, 10))
    );
    dispatch(setAccessTagsHistoryFiltersMainPage(1));
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        height: `calc(100% - 100px)`,
        padding: "0px",
        border: "1px solid rgba(224, 224, 224, 1)",
      }}
    >
      <TableContainer
        sx={{
          height: "100%",
        }}
      >
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
            {historyStatus === "success" &&
              historyData.map((row) => (
                <TableRow
                  hover
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.field}</TableCell>
                  <TableCell>{row["access_tag.name"]}</TableCell>
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

export default AccessTagsHistoryTablesFull;
