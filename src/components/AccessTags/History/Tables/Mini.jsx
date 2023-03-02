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
} from "@src/components/Basic/Table";

import { useSelector, useDispatch } from "react-redux";
import {
  setAccessTagsInputName,
  setAccessTagsInputDescription,
} from "@src/redux/slices/AccessTags/input";
import { setAccessTagMiniHistoryWindowIsOpen } from "@src/redux/slices/AccessTags/miniHistoryWindow";
import {
  selectAccessTagsMiniHistoryData,
  selectAccessTagsMiniHistoryStatus,
} from "@src/redux/slices/AccessTags/miniHistory";
import { changeAccessTagValue } from "@src/redux/slices/AccessTags/data";
import { selectAccessTagsInputData } from "@src/redux/slices/AccessTags/input";
import { fetchAccessTagsMiniHistory } from "@src/redux/slices/AccessTags/miniHistory";
const headCells = [
  { id: "new_value", numeric: false, label: "Value" },
  { id: "createdAt", numeric: false, label: "Date" },
];

function AccessTagsHistoryTablesMini() {
  const dispatch = useDispatch();

  const historyData = useSelector(selectAccessTagsMiniHistoryData);
  const historyStatus = useSelector(selectAccessTagsMiniHistoryStatus);
  const { id } = useSelector(selectAccessTagsInputData);
  const { isNameFocused, isDescriptionFocus } = useSelector(
    selectAccessTagsInputData
  );
  const filter = isNameFocused
    ? { id, field: "name" }
    : isDescriptionFocus
    ? { id, field: "description" }
    : null;
  const theme = useTheme();

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
    if (!filter) return;
    dispatch(fetchAccessTagsMiniHistory(filter));
  }, []);

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
                <TableCell key={headCell.id}>{headCell.label}</TableCell>
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
    </Paper>
  );
}

export default AccessTagsHistoryTablesMini;
