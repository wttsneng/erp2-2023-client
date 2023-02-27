import React from "react";
import { Autocomplete, TextField, Box, InputAdornment } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { selectData as selectAccessTagsData } from "@src/redux/slices/AccessTags/data";
import { setTagHistoryId } from "@src/redux/slices/AccessTags/historyFilter";

function AccessTagsAutoComplete() {
  const dispatch = useDispatch();
  const accessTags = useSelector(selectAccessTagsData);
  const normalizedAccessTags = accessTags.map((accessTag) => {
    return {
      label: accessTag.name,
      id: accessTag.id,
    };
  });
  return (
    <Box
      sx={{
        marginBottom: 2,
      }}
    >
      <Autocomplete
        disablePortal
        options={normalizedAccessTags}
        onChange={(event, newValue) => {
          dispatch(setTagHistoryId(newValue.id));
        }}
        zIndex={1000}
        onInputChange={(event, newInputValue) => {
          dispatch(setTagHistoryId(null));
        }}
        renderInput={(params) => (
          <TextField hiddenLabel {...params} size="small" />
        )}
      />
    </Box>
  );
}

export default AccessTagsAutoComplete;
