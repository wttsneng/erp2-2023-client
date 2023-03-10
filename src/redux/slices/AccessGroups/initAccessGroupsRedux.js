import { accessGroupsFiltersMainReducer } from "@src/redux/slices/AccessGroups/filters/main";
import { accessGroupsHistoryFiltersMainReducer } from "@src/redux/slices/AccessGroups/history/filters/main";
import { accessGroupsHistoryFiltersFieldReducer } from "@src/redux/slices/AccessGroups/history/filters/field";
import { accessGroupsDataMainReducer } from "@src/redux/slices/AccessGroups/data/main";
import { accessGroupsHistoryDataMainReducer } from "@src/redux/slices/AccessGroups/history/data/main";
import { accessGroupsHistoryWindowsMainReducer } from "@src/redux/slices/AccessGroups/history/windows/main";
import { AccessGroupsFilterWindowReducer } from "@src/redux/slices/AccessGroups/windows/filter";
import { accessGroupsHistoryWindowsFieldReducer } from "@src/redux/slices/AccessGroups/history/windows/field";
import { accessGroupsWindowsWarningsReducer } from "@src/redux/slices/AccessGroups/windows/warnings";
import { accessGroupsHistoryDataFieldReducer } from "@src/redux/slices/AccessGroups/history/data/field";
import { accessGroupsSelectedReducer } from "@src/redux/slices/AccessGroups/selected";
import { accessGroupsEditingsNameReducer } from "@src/redux/slices/AccessGroups/editings/name";
import { accessGroupsEditingsDescriptionReducer } from "@src/redux/slices/AccessGroups/editings/description";
import { accessGroupsToolsAddButtonReducer } from "@src/redux/slices/AccessGroups/tools/addButton";
import { combineReducers } from "redux";
import store from "@src/redux/store";

const AccessGroupsDataCombinedReducer = combineReducers({
  main: accessGroupsDataMainReducer,
});
const AccessGroupsFiltersCombinedReducer = combineReducers({
  main: accessGroupsFiltersMainReducer,
});
const AccessGroupsWindowsCombinedReducer = combineReducers({
  filter: AccessGroupsFilterWindowReducer,
  warnings: accessGroupsWindowsWarningsReducer,
});
const AccessGroupsEditingsCombinedReducer = combineReducers({
  name: accessGroupsEditingsNameReducer,
  description: accessGroupsEditingsDescriptionReducer,
});
const AccessGroupsHistoryDataCombinedReducer = combineReducers({
  main: accessGroupsHistoryDataMainReducer,
  field: accessGroupsHistoryDataFieldReducer,
});
const AccessGroupsHistoryFiltersCombinedReducer = combineReducers({
  main: accessGroupsHistoryFiltersMainReducer,
  field: accessGroupsHistoryFiltersFieldReducer,
});
const AccessGroupsHistoryWindowsCombinedReducer = combineReducers({
  main: accessGroupsHistoryWindowsMainReducer,
  field: accessGroupsHistoryWindowsFieldReducer,
});
const AccessGroupsHistoryCombinedReducer = combineReducers({
  data: AccessGroupsHistoryDataCombinedReducer,
  filters: AccessGroupsHistoryFiltersCombinedReducer,
  windows: AccessGroupsHistoryWindowsCombinedReducer,
});
const AccessGroupsToolsCombinedReducer = combineReducers({
  addButton: accessGroupsToolsAddButtonReducer,
});

export const accessGroupsCombinesReducers = combineReducers({
  data: AccessGroupsDataCombinedReducer,
  filters: AccessGroupsFiltersCombinedReducer,
  windows: AccessGroupsWindowsCombinedReducer,
  editings: AccessGroupsEditingsCombinedReducer,
  selected: accessGroupsSelectedReducer,
  history: AccessGroupsHistoryCombinedReducer,
  tools: AccessGroupsToolsCombinedReducer,
});
export const injectAccessGroupsReducers = () => {
  store.injectAsyncReducer("accessGroups", accessGroupsCombinesReducers);
};
