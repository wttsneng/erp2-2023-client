import React from "react";
import { selectAccessTagsToolsAddButtonClickHappened } from "@src/redux/slices/AccessTags/tools/addButton";
import { setAccessTagsSingleSelected } from "@src/redux/slices/AccessTags/selected";
import { socket } from "@src/core";
import {
  useAccessTagsDispatch,
  useAccessTagsSelector,
} from "./useAccessTagsRedux";

function useAccessTagsAddListener() {
  const dispatch = useAccessTagsDispatch();
  const addButtonClickHappened = useAccessTagsSelector(
    selectAccessTagsToolsAddButtonClickHappened
  );
  React.useEffect(() => {
    const timer = setTimeout(() => {
      socket.on("accessTags/addAccessTags", (data) => {
        dispatch(setAccessTagsSingleSelected(data));
      });
    }, 1000);
    return () => {
      clearTimeout(timer);
      socket.off("accessTags/addAccessTags");
    };
  }, [addButtonClickHappened]);
}

export default useAccessTagsAddListener;
