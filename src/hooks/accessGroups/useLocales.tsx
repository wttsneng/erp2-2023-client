import { useTranslation } from "react-i18next";
import enAccessGroupsDictionary from "@src/locales/en/accessGroups.json";
import ruAccessGroupsDictionary from "@src/locales/ru/accessGroups.json";
function useAccessGroupsLocales() {
  const { i18n } = useTranslation();
  i18n.addResourceBundle("en", "accessGroups", enAccessGroupsDictionary);
  i18n.addResourceBundle("ru", "accessGroups", ruAccessGroupsDictionary);
}

export default useAccessGroupsLocales;
