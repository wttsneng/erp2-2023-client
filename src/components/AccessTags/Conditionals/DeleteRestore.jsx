import React from "react";
import {
  AccessTagsToolsDeleteButton,
  AccessTagsToolsRestoreButton,
} from "@src/components/AccessTags";
import { useSelector } from "react-redux";
function AccessTagsConditionalsDeleteRestore() {
  const isDeleteEnabled = useSelector(
    (state) => state.accessTags.table.deleteEnabled
  );
  const isRestoreEnabled = useSelector(
    (state) => state.accessTags.table.restoreEnabled
  );
  if (isDeleteEnabled) return <AccessTagsToolsDeleteButton />;

  return (
    <>
      {isDeleteEnabled && <AccessTagsToolsDeleteButton />}
      {isRestoreEnabled && <AccessTagsToolsRestoreButton />}
    </>
  );
}

export default AccessTagsConditionalsDeleteRestore;
