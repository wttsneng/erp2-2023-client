import { useTranslation } from "react-i18next";
const useAccessGroupsTranslation = () => {
  const accessGroupsTranslationObj = useTranslation(["global", "accessGroups"]);
  return accessGroupsTranslationObj;
};

export default useAccessGroupsTranslation;
