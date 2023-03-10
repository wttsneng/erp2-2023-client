import { IAccessTags } from "@src/redux/slices/AccessTags/@types";

const getTagState = (item: IAccessTags): boolean | null => {
  if (
    item &&
    item.access_group_access_tags &&
    item.access_group_access_tags[0]
  ) {
    return item.access_group_access_tags[0].state;
  }
  return null;
};
export default getTagState;
