import React from "react";

import { Stack } from "@mui/material";

import withCheck from "./HOC/withCheck";

import {
  AccessTagsEditingInputsChangeDescription,
  AccessTagsEditingInputsChangeName,
} from "@src/components/AccessTags";

function AccessTagInput() {
  return (
    <div>
      <Stack spacing={2} sx={{ padding: 2 }}>
        <AccessTagsEditingInputsChangeName />
        <AccessTagsEditingInputsChangeDescription />
      </Stack>
    </div>
  );
}

export default withCheck(AccessTagInput);
