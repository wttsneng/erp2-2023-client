import { useTranslation } from "react-i18next";
import enAccessTagsDictionary from "@src/locales/en/accessTags.json";
import ruAccessTagsDictionary from "@src/locales/ru/accessTags.json";
function useAccessTagsLocales() {
  const { i18n } = useTranslation();
  i18n.addResourceBundle("en", "accessTags", enAccessTagsDictionary);
  i18n.addResourceBundle("ru", "accessTags", ruAccessTagsDictionary);
}

export default useAccessTagsLocales;
