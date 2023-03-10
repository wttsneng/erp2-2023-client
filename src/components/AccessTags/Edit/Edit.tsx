import React, { FC } from "react";

import { Stack, Box } from "@mui/material";

import withCheck from "./HOC/withCheck";

import {
  AccessTagsEditingInputsChangeDescription,
  AccessTagsEditingInputsChangeName,
} from "@src/components/AccessTags";

const AccessTagsEdit: FC = () => {
  return (
    <Box className="editContainer">
      <Stack spacing={2}>
        <AccessTagsEditingInputsChangeName />
        <AccessTagsEditingInputsChangeDescription />
      </Stack>
    </Box>
  );
};

export default withCheck(AccessTagsEdit);
