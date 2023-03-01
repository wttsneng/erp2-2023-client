import { accessTagsFilterReducer } from "@src/redux/slices/AccessTags/filter";
import { accessTagsFullHistoryFilterReducer } from "@src/redux/slices/AccessTags/fullHistoryFilter";
import { accessTagsDataReducer } from "@src/redux/slices/AccessTags/data";
import { accessTagsHistoryReducer } from "@src/redux/slices/AccessTags/history";
import { accessTagsInputReducer } from "@src/redux/slices/AccessTags/input";
import { accessTagsFullHistoryWindowReducer } from "@src/redux/slices/AccessTags/fullHistoryWindow";
import { accessTagsTableReducer } from "@src/redux/slices/AccessTags/table";
import { injectAsyncReducer } from "@src/redux/store";
import { AccessTagsFilterWindowReducer } from "@src/redux/slices/AccessTags/filterWindow";
import { accessTagMiniHistoryWindowReducer } from "@src/redux/slices/AccessTags/miniHistoryWindow";
import { combineReducers } from "redux";
import { store } from "@src/index";

const initAccessTagRedux = () => {
  const AccessTagCombinedReducer = combineReducers({
    data: accessTagsDataReducer,
    filter: accessTagsFilterReducer,
    fullHistoryFilter: accessTagsFullHistoryFilterReducer,
    history: accessTagsHistoryReducer,
    input: accessTagsInputReducer,
    fullHistoryWindow: accessTagsFullHistoryWindowReducer,
    table: accessTagsTableReducer,
    filterWindow: AccessTagsFilterWindowReducer,
    miniHistoryWindow: accessTagMiniHistoryWindowReducer,
  });
  injectAsyncReducer(store, "accessTags", AccessTagCombinedReducer);
};
export default initAccessTagRedux;
