import React from "react";
import { Button, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTagsInputName,
  setAccessTagsInputDescription,
  setAccessTagsInputInitialName,
  setAccessTagsInputInitialDescription,
  setAccessTagsInputIsDescriptionDisabled,
  setAccessTagsInputIsNameDisabled,
  setAccessTagsInputIsNameFocused,
  setAccessTagsInputIsDescriptionFocused,
  setAccessTagsInputId,
  selectAccessTagsInputData,
} from "../../redux/slices/AccessTagsInputSlice";
function AccessTagsAddDelete() {
  const dispatch = useDispatch();
  const inputData = useSelector(selectAccessTagsInputData);
  React.useEffect(() => {
    if (inputData.mode === "create") {
      dispatch(setAccessTagsInputName(""));
      dispatch(setAccessTagsInputDescription(""));
      dispatch(setAccessTagsInputInitialName(""));
      dispatch(setAccessTagsInputInitialDescription(""));
      dispatch(setAccessTagsInputIsDescriptionDisabled(false));
      dispatch(setAccessTagsInputIsNameDisabled(false));
      dispatch(setAccessTagsInputIsNameFocused(true));
      dispatch(setAccessTagsInputIsDescriptionFocused(false));
      dispatch(setAccessTagsInputId(null));
    }
  }, [inputData.mode, dispatch]);

  return (
    <div className="buttons">
      <Stack direction="row" spacing={2}>
        <Button variant="contained">
          <AddCircleOutlineIcon />
        </Button>
        <Button variant="contained" color="error">
          <DeleteOutlineIcon />
        </Button>
      </Stack>
    </div>
  );
}

export default AccessTagsAddDelete;
