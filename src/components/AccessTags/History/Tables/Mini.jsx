import React from "react";

import { TableSortLabel, Box, Paper } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { useTheme } from "@mui/material/styles";

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
  selectAccessTagsFullHistoryFilter,
  setAccessTagsFullHistoryFilterSortBy,
  setAccessTagsFullHistoryFilterOrder,
  setAccessTagsTagFullHistoryFilterLimit,
  setAccessTagsFullHistoryFilterPage,
} from "@src/redux/slices/AccessTags/fullHistoryFilter";
import {
  setAccessTagsInputName,
  setAccessTagsInputDescription,
} from "@src/redux/slices/AccessTags/input";
import { setAccessTagMiniHistoryWindowIsOpen } from "@src/redux/slices/AccessTags/miniHistoryWindow";
import {
  selectAccessTagsHistoryData,
  selectAccessTagsHistoryStatus,
} from "@src/redux/slices/AccessTags/history";
import { changeAccessTagValue } from "@src/redux/slices/AccessTags/data";
import { fetchAccessTagsHistory } from "@src/redux/slices/AccessTags/history";

const headCells = [
  { id: "new_value", numeric: false, label: "Value" },
  { id: "createdAt", numeric: false, label: "Date" },
];

function AccessTagsHistoryTablesMini() {
  const dispatch = useDispatch();
  const filter = useSelector(selectAccessTagsFullHistoryFilter);
  const historyCount = useSelector((state) => state.accessTags.history.count);
  const historyData = useSelector(selectAccessTagsHistoryData);
  const historyStatus = useSelector(selectAccessTagsHistoryStatus);
  const theme = useTheme();

  const handleSort = (property) => {
    const isAsc = filter.sortBy === property && filter.order === "ASC";
    dispatch(setAccessTagsFullHistoryFilterSortBy(property));
    dispatch(setAccessTagsFullHistoryFilterOrder(isAsc ? "DESC" : "ASC"));
  };
  const handleChangePage = (event, newPage) => {
    dispatch(setAccessTagsFullHistoryFilterPage(newPage));
  };
  const handleChangeRowsPerPage = (event) => {
    dispatch(
      setAccessTagsTagFullHistoryFilterLimit(parseInt(event.target.value, 10))
    );
    dispatch(setAccessTagsFullHistoryFilterPage(1));
  };
  const handleValueClick = (value) => {
    if (filter.field === "name") {
      dispatch(setAccessTagsInputName(value));
      changeAccessTagValue({
        itemId: filter.id,
        attribute: "name",
        value,
      });
    }
    if (filter.field === "description") {
      dispatch(setAccessTagsInputDescription(value));
      changeAccessTagValue({
        itemId: filter.id,
        attribute: "description",
        value,
      });
    }
    dispatch(setAccessTagMiniHistoryWindowIsOpen(false));
  };
  React.useEffect(() => {
    dispatch(fetchAccessTagsHistory());
  }, [filter, dispatch]);
  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        border: "1px solid rgba(224, 224, 224, 1)",
      }}
    >
      <TableContainer>
        <Table sx={{ minWidth: 180 }} size="small" aria-label="simple table">
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
                  <TableCell
                    onClick={() => {
                      handleValueClick(row.new_value);
                    }}
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {row.new_value}
                  </TableCell>
                  <TableCell>{`${row.createdAt.split("T")[0]} ${row.createdAt
                    .split("T")[1]
                    .slice(0, 8)}`}</TableCell>
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

export default AccessTagsHistoryTablesMini;
