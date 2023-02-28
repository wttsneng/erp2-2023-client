import React from "react";
import { MySelect } from "@src/components/Basic";
import { Box } from "@mui/material";

import {
  selectHistoryFilter,
  setHistoryField,
} from "@src/redux/slices/AccessTags/historyFilter";
import { useSelector, useDispatch } from "react-redux";

function AccessTagsFullHistoryFieldSelect() {
  const dispatch = useDispatch();
  const historyFilter = useSelector(selectHistoryFilter);
  return (
    <Box
      sx={{
        marginY: 2,
      }}
    >
      <MySelect
        value={`${historyFilter.field || ""}`}
        options={["name", "description"]}
        label="Field"
        onChange={(e) => {
          dispatch(setHistoryField(e.target.value));
        }}
      ></MySelect>
    </Box>
  );
}

export default AccessTagsFullHistoryFieldSelect;
