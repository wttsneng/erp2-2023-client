import React from "react";
import TableContainer from "../Basic/Table/TableContainer";
import Table from "../Basic/Table/Table";
import TableHead from "../Basic/Table/TableHead";
import TableRow from "../Basic/Table/TableRow";
import TableCell from "../Basic/Table/TableCell";
import TableBody from "../Basic/Table/TableBody";
function AccessTagsHistoryTable({ data }) {
  return (
    <div>
      <TableContainer>
        <Table sx={{ minWidth: 180 }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.field}
                </TableCell>
                <TableCell>{row.new_value}</TableCell>
                <TableCell>{row.createdAt}</TableCell>
                <TableCell>{row["user.login"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AccessTagsHistoryTable;
