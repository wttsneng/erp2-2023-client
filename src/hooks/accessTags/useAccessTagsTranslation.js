import { useTranslation } from "react-i18next";
function useAccessTagsTranslation() {
  const accessTagsTranslationObj = useTranslation(["global", "accessTags"]);
  return accessTagsTranslationObj;
}

export default useAccessTagsTranslation;
