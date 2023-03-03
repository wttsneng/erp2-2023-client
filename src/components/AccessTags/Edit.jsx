import React from "react";

import { Stack } from "@mui/material";

import {
  AccessTagsEditingInputsChangeDescription,
  AccessTagsEditingInputsChangeName,
} from "@src/components/AccessTags";

import { useDispatch } from "react-redux";

function AccessTagInput() {
  const dispatch = useDispatch();

  return (
    <div>
      <Stack spacing={2}>
        <AccessTagsEditingInputsChangeName />
        <AccessTagsEditingInputsChangeDescription />
      </Stack>
    </div>
  );
}

export default AccessTagInput;
