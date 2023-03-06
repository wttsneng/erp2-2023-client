import React from "react";

import { Paper } from "@mui/material";
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

import { setAccessTagsHistoryWindowsFieldOpen } from "@src/redux/slices/AccessTags/history/windows/field";
import {
  selectAccessTagsHistoryDataFieldData,
  selectAccessTagsHistoryDataFieldStatus,
} from "@src/redux/slices/AccessTags/history/data/field";
import { socketEmitAccessTagsChangeValue } from "@src/socket/emits/AccessTags";
import { selectAccessTagsHistoryFiltersField } from "@src/redux/slices/AccessTags/history/filters/field";

const headCells = [
  { id: "new_value", numeric: false, label: "Value" },
  { id: "createdAt", numeric: false, label: "Date" },
];

function AccessTagsHistoryTablesMini() {
  const dispatch = useDispatch();

  const historyData = useSelector(selectAccessTagsHistoryDataFieldData);
  const historyStatus = useSelector(selectAccessTagsHistoryDataFieldStatus);
  const historyField = useSelector(selectAccessTagsHistoryFiltersField);

  const theme = useTheme();
  const handleValueClick = (value) => {
    socketEmitAccessTagsChangeValue({
      itemId: historyData[0].access_tag_id,
      attribute: historyField.field,
      value,
    });
    dispatch(setAccessTagsHistoryWindowsFieldOpen(false));
  };

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
