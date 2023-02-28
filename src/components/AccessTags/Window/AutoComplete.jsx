import React from "react";
import { Autocomplete, Box } from "@mui/material";
import Input from "@src/components/Basic/Input/input";

import { useSelector, useDispatch } from "react-redux";
import { selectAccessTagsData } from "@src/redux/slices/AccessTags/data";
import { setAccessTagsTagHistoryId } from "@src/redux/slices/AccessTags/historyFilter";

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
        options={normalizedAccessTags}
        onChange={(event, newValue) => {
          dispatch(setAccessTagsTagHistoryId(newValue.id));
        }}
        onInputChange={(event, newInputValue) => {
          dispatch(setAccessTagsTagHistoryId(null));
        }}
        clearOnEscape={true}
        renderInput={(params) => <Input {...params} label="someS" />}
      />
    </Box>
  );
}

export default AccessTagsAutoComplete;