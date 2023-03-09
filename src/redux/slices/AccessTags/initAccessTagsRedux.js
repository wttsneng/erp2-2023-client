import { accessTagsFiltersMainReducer } from "@src/redux/slices/AccessTags/filters/main";
import { accessTagsHistoryFiltersMainReducer } from "@src/redux/slices/AccessTags/history/filters/main";
import { accessTagsHistoryFiltersFieldReducer } from "@src/redux/slices/AccessTags/history/filters/field";
import { accessTagsDataMainReducer } from "@src/redux/slices/AccessTags/data/main";
import { accessTagsHistoryDataMainReducer } from "@src/redux/slices/AccessTags/history/data/main";
import { accessTagsHistoryWindowsMainReducer } from "@src/redux/slices/AccessTags/history/windows/main";
import { AccessTagsFilterWindowReducer } from "@src/redux/slices/AccessTags/windows/filter";
import { accessTagsHistoryWindowsFieldReducer } from "@src/redux/slices/AccessTags/history/windows/field";
import { accessTagsWindowsWarningsReducer } from "@src/redux/slices/AccessTags/windows/warnings";
import { accessTagsHistoryDataFieldReducer } from "@src/redux/slices/AccessTags/history/data/field";
import { accessTagsSelectedReducer } from "@src/redux/slices/AccessTags/selected";
import { accessTagsEditingsNameReducer } from "@src/redux/slices/AccessTags/editings/name";
import { accessTagsEditingsDescriptionReducer } from "@src/redux/slices/AccessTags/editings/description";
import { accessTagsToolsAddButtonReducer } from "@src/redux/slices/AccessTags/tools/addButton";
import { combineReducers } from "redux";
import store from "@src/redux/store";

const AccessTagsDataCombinedReducer = combineReducers({
  main: accessTagsDataMainReducer,
});
const AccessTagsFiltersCombinedReducer = combineReducers({
  main: accessTagsFiltersMainReducer,
});
const AccessTagsWindowsCombinedReducer = combineReducers({
  filter: AccessTagsFilterWindowReducer,
  warnings: accessTagsWindowsWarningsReducer,
});
const AccessTagsEditingsCombinedReducer = combineReducers({
  name: accessTagsEditingsNameReducer,
  description: accessTagsEditingsDescriptionReducer,
});
const AccessTagsHistoryDataCombinedReducer = combineReducers({
  main: accessTagsHistoryDataMainReducer,
  field: accessTagsHistoryDataFieldReducer,
});
const AccessTagsHistoryFiltersCombinedReducer = combineReducers({
  main: accessTagsHistoryFiltersMainReducer,
  field: accessTagsHistoryFiltersFieldReducer,
});
const AccessTagsHistoryWindowsCombinedReducer = combineReducers({
  main: accessTagsHistoryWindowsMainReducer,
  field: accessTagsHistoryWindowsFieldReducer,
});
const AccessTagsHistoryCombinedReducer = combineReducers({
  data: AccessTagsHistoryDataCombinedReducer,
  filters: AccessTagsHistoryFiltersCombinedReducer,
  windows: AccessTagsHistoryWindowsCombinedReducer,
});
const AccessTagsToolsCombinedReducer = combineReducers({
  addButton: accessTagsToolsAddButtonReducer,
});

export const accessTagsCombinesReducers = combineReducers({
  data: AccessTagsDataCombinedReducer,
  filters: AccessTagsFiltersCombinedReducer,
  windows: AccessTagsWindowsCombinedReducer,
  editings: AccessTagsEditingsCombinedReducer,
  selected: accessTagsSelectedReducer,
  history: AccessTagsHistoryCombinedReducer,
  tools: AccessTagsToolsCombinedReducer,
});
export const injectAccessTagsReducers = () => {
  store.injectAsyncReducer("accessTags", accessTagsCombinesReducers);
};
