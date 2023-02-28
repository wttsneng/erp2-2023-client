import { accessTagsFilterReducer } from "@src/redux/slices/AccessTags/filter";
import { accessTagsHistoryFilterReducer } from "@src/redux/slices/AccessTags/historyFilter";
import { accessTagsDataReducer } from "@src/redux/slices/AccessTags/data";
import { accessTagsHistoryReducer } from "@src/redux/slices/AccessTags/history";
import { accessTagsInputReducer } from "@src/redux/slices/AccessTags/input";
import { accessTagsHistoryWindowReducer } from "@src/redux/slices/AccessTags/historyWindow";
import { accessTagsTableReducer } from "@src/redux/slices/AccessTags/table";
import { injectAsyncReducer } from "@src/redux/store";
import { AccessTagsFilterWindowReducer } from "@src/redux/slices/AccessTags/filterWindow";
import { combineReducers } from "redux";
import { store } from "@src/index";

const initAccessTagRedux = () => {
  const AccessTagCombinedReducer = combineReducers({
    data: accessTagsDataReducer,
    filter: accessTagsFilterReducer,
    historyFilter: accessTagsHistoryFilterReducer,
    history: accessTagsHistoryReducer,
    input: accessTagsInputReducer,
    historyWindow: accessTagsHistoryWindowReducer,
    table: accessTagsTableReducer,
    filterWindow: AccessTagsFilterWindowReducer,
  });
  injectAsyncReducer(store, "accessTags", AccessTagCombinedReducer);
};
export default initAccessTagRedux;
