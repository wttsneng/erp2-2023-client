import React, { FC } from "react";

import { ModalsWarning } from "@src/components/Basic";

import {
  useAccessTagsDispatch,
  useAccessTagsSelector,
} from "@src/hooks/accessTags/useAccessTagsRedux";
import {
  setAccessTagsWindowsWarningsDeleteOpen,
  selectAccessTagsWindowsWarningsDeleteOpen,
} from "@src/redux/slices/AccessTags/windows/warnings";
import useAccessTagsDelete from "@src/hooks/accessTags/useAccessTagsDelete";
import { selectAccessTagsSelected } from "@src/redux/slices/AccessTags/selected";

const AccessTagsWarningsDelete: FC = () => {
  const dispatch = useAccessTagsDispatch();
  const isOpen = useAccessTagsSelector(
    selectAccessTagsWindowsWarningsDeleteOpen
  );
  const accessTagsSelected = useAccessTagsSelector(selectAccessTagsSelected);
  const deleteAccessTags = useAccessTagsDelete();

  const onAgree = () => {
    dispatch(setAccessTagsWindowsWarningsDeleteOpen(false));
    deleteAccessTags();
  };
  const onDisagree = () => {
    dispatch(setAccessTagsWindowsWarningsDeleteOpen(false));
  };
  return (
    <ModalsWarning
      open={isOpen}
      onAgree={onAgree}
      onDisagree={onDisagree}
      title={"Delete Tags?"}
      description={`Are you sure you want to delete ${accessTagsSelected.length} objects? `}
    />
  );
};

export default AccessTagsWarningsDelete;
