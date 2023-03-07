import React from "react";

import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAccessTagsSelected } from "@src/redux/slices/AccessTags/selected";
import {
  AccessTagsEditingInputsChangeDescription,
  AccessTagsEditingInputsChangeName,
} from "@src/components/AccessTags";

function AccessTagInput() {
  const selectedTags = useSelector(selectAccessTagsSelected);
  return (
    <div>
      <Stack spacing={2}>
        {selectedTags[0] && !selectedTags[0].deletedAt && (
          <>
            <AccessTagsEditingInputsChangeName />
            <AccessTagsEditingInputsChangeDescription />
          </>
        )}
      </Stack>
    </div>
  );
}

export default AccessTagInput;
