import React from "react";
import { Stack } from "@mui/material";

import {
  AccessTagsToolsAddButton,
  AccessTagsConditionalsDeleteRestore,
  AccessTagsHistoryToolsOpenHistoryButton,
} from "@src/components/AccessTags";

function AccessTagsAddDelete() {
  return (
    <div className="buttons">
      <Stack direction="row" spacing={2} sx={{ marginY: 2 }}>
        <AccessTagsToolsAddButton />
        <AccessTagsConditionalsDeleteRestore />
        <AccessTagsHistoryToolsOpenHistoryButton />
      </Stack>
    </div>
  );
}

export default AccessTagsAddDelete;
