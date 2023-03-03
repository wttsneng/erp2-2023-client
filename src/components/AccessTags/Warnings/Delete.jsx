import React from "react";

import { ModalsWarning } from "@src/components/Basic";

import { useSelector, useDispatch } from "react-redux";
import {
  setAccessTagsWindowsWarningsDeleteOpen,
  selectAccessTagsWindowsWarningsDeleteOpen,
} from "@src/redux/slices/AccessTags/windows/warnings";
import useAccessTagsDelete from "@src/hooks/accessTags/useAccessTagsDelete";
import { selectAccessTagsSelected } from "@src/redux/slices/AccessTags/selected";

function AccessTagsWarningsDelete() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectAccessTagsWindowsWarningsDeleteOpen);
  const accessTagsSelected = useSelector(selectAccessTagsSelected);
  const socketEmitAccessTagsDeletesDataMainItem = useAccessTagsDelete();

  const onAgree = () => {
    dispatch(setAccessTagsWindowsWarningsDeleteOpen(false));
    socketEmitAccessTagsDeletesDataMainItem();
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
}

export default AccessTagsWarningsDelete;
