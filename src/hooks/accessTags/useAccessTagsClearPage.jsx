import React from "react";
import { useAccessTagsDispatch } from "@src/hooks/accessTags/useAccessTagsRedux";
import { clearAccessTagsHistoryFilterMain } from "@src/redux/slices/AccessTags/history/filters/main";
import { clearAccessTagsSelected } from "@src/redux/slices/AccessTags/selected";
import { clearAccessTagsHistoryFiltersField } from "@src/redux/slices/AccessTags/history/filters/field";
import { setAccessTagsHistoryWindowsFieldOpen } from "@src/redux/slices/AccessTags/history/windows/field";
import { setAccessTagsHistoryWindowsMainOpen } from "@src/redux/slices/AccessTags/history/windows/main";
import { setAccessTagsWindowsFilterOpen } from "@src/redux/slices/AccessTags/windows/filter";
import { setAccessTagsWindowsWarningsDeleteOpen } from "@src/redux/slices/AccessTags/windows/warnings";
import { clearAccessTagsDataMain } from "@src/redux/slices/AccessTags/data/main";

function useAccessTagsClearPage() {
  const dispatch = useAccessTagsDispatch();
  React.useEffect(() => {
    dispatch(clearAccessTagsDataMain());
    dispatch(clearAccessTagsHistoryFilterMain());
    dispatch(clearAccessTagsSelected());
    dispatch(clearAccessTagsHistoryFiltersField());
    dispatch(setAccessTagsHistoryWindowsFieldOpen(false));
    dispatch(setAccessTagsHistoryWindowsMainOpen(false));
    dispatch(setAccessTagsWindowsFilterOpen(false));
    dispatch(setAccessTagsWindowsWarningsDeleteOpen(false));
  }, [dispatch]);
}

export default useAccessTagsClearPage;
