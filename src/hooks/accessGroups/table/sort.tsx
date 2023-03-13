import React from "react";
import { useAccessGroupsDispatch, useAccessGroupsSelector } from "../useRedux";
import {
  selectAccessGroupsFiltersMain,
  setAccessGroupsFiltersMainSortBy,
  setAccessGroupsFiltersMainOrder,
} from "@src/redux/slices/AccessGroups/filters/main";
import { GridSortModel } from "@mui/x-data-grid";

type SortBy = "name" | "description" | "createdAt" | "updatedAt" | "deletedAt";
type Order = "ASC" | "DESC";
type OrderLowerCase = "asc" | "desc";
type SortModel = {
  field: SortBy;
  sort: OrderLowerCase;
};
type SortModelArray = SortModel[];
// Доделать !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const useAccessGroupsTableSort = (): [
  SortModelArray,
  (params: GridSortModel) => void
] => {
  const dispatch = useAccessGroupsDispatch();
  const { order, sortBy } = useAccessGroupsSelector(
    selectAccessGroupsFiltersMain
  );

  const handleSortModelChange = React.useCallback(
    (params: GridSortModel) => {
      let sortModel = params[0];

      if (!sortModel) {
        sortModel = {
          field: "name" as SortBy,
          sort: "asc" as OrderLowerCase,
        };
      }
      if (!sortModel.field) {
        sortModel.field = "name" as SortBy;
      }
      if (!sortModel.sort) {
        sortModel.sort = "asc" as OrderLowerCase;
      }
      const { field, sort } = sortModel;
      dispatch(setAccessGroupsFiltersMainSortBy(field as SortBy));
      dispatch(setAccessGroupsFiltersMainOrder(sort.toUpperCase() as Order));
    },
    [dispatch]
  );

  const sortModel: SortModelArray = React.useMemo(() => {
    return [
      {
        field: sortBy.value,
        sort: order.value.toLowerCase() as "asc" | "desc",
      },
    ];
  }, [order, sortBy]);
  return [sortModel, handleSortModelChange];
};

export default useAccessGroupsTableSort;
