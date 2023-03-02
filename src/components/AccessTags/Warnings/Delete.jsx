import React from "react";

import { ModalsWarning } from "@src/components/Basic";

import { useSelector, useDispatch } from "react-redux";
import {
  setAccessTagsWarningsDeleteIsOpen,
  selectAccessTagsWarningsDeleteIsOpen,
} from "@src/redux/slices/AccessTags/warnings";
import useAccessTagsDelete from "@src/hooks/useAccessTagsDelete";
import { selectAccessTagsTableSelected } from "@src/redux/slices/AccessTags/table";

function AccessTagsWarningsDelete() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectAccessTagsWarningsDeleteIsOpen);
  const accessTagsTableSelected = useSelector(selectAccessTagsTableSelected);
  const deleteAccessTags = useAccessTagsDelete();

  const onAgree = () => {
    dispatch(setAccessTagsWarningsDeleteIsOpen(false));
    deleteAccessTags();
  };
  const onDisagree = () => {
    dispatch(setAccessTagsWarningsDeleteIsOpen(false));
  };
  return (
    <ModalsWarning
      open={isOpen}
      onAgree={onAgree}
      onDisagree={onDisagree}
      title={"Delete Tags?"}
      description={`Are you sure you want to delete ${accessTagsTableSelected.length} objects? `}
    />
  );
}

export default AccessTagsWarningsDelete;
