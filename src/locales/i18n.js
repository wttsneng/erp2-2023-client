import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enGlobalDictionary from "./en/global.json";
import ruGlobalDictionary from "./ru/global.json";
i18n.use(initReactI18next).init({
  resources: {},
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});
i18n.addResourceBundle("en", "global", enGlobalDictionary);
i18n.addResourceBundle("ru", "global", ruGlobalDictionary);

export default i18n;
