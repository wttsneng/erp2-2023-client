import React from "react";

import { Stack, Box } from "@mui/material";

import withCheck from "./HOC/withCheck";

import {
  AccessTagsEditingInputsChangeDescription,
  AccessTagsEditingInputsChangeName,
} from "@src/components/AccessTags";

function AccessTagsEdit() {
  return (
    <Box className="editContainer">
      <Stack spacing={2}>
        <AccessTagsEditingInputsChangeName />
        <AccessTagsEditingInputsChangeDescription />
      </Stack>
    </Box>
  );
}

export default withCheck(AccessTagsEdit);
