import { Search } from "@src/components/Basic";

import {
  useAccessGroupsDispatch,
  useAccessGroupsSelector,
} from "@src/hooks/accessGroups/useRedux";
import { useAccessGroupsTranslation } from "@src/hooks/accessGroups";

import {
  setAccessGroupsFiltersMainSearchValue,
  selectAccessGroupsFiltersMain,
} from "@src/redux/slices/AccessGroups/filters/main";
import { fetchAccessGroupsDataMain } from "@src/redux/slices/AccessGroups/data/main";

const AccessGroupsFltersSearch = () => {
  const dispatch = useAccessGroupsDispatch();
  const { t } = useAccessGroupsTranslation();
  const filters = useAccessGroupsSelector(selectAccessGroupsFiltersMain);
  const { searchValue } = useAccessGroupsSelector(
    selectAccessGroupsFiltersMain
  );

  const onSearch = (value: string) => {
    dispatch(setAccessGroupsFiltersMainSearchValue(value));
    dispatch(fetchAccessGroupsDataMain(filters));
  };
  return (
    <Search
      onChange={onSearch}
      label={t("accessGroups:Search")}
      value={searchValue}
    />
  );
};

export default AccessGroupsFltersSearch;
