import { TagWithTooltip } from "@src/components/Basic";
import { IAccessTags } from "@src/redux/slices/AccessTags/@types";
import { getTagState } from "@src/utils/Basic";

interface IProps {
  arr: IAccessTags[];
  onClick: (tag: any) => void;
  selectedTags: IAccessTags[];
  [key: string]: any;
}
function AccessTagsTableTagList({
  arr,
  onClick,
  selectedTags,
  ...props
}: IProps) {
  return (
    <>
      {arr.map((item) => {
        return (
          <TagWithTooltip
            key={item.id}
            item={item}
            onClick={onClick}
            deleted={Boolean(item.deletedAt)}
            selected={selectedTags.some((tag) => tag.id === item.id)}
            writable={!!getTagState(item)}
            readOnly={getTagState(item) === false}
            {...props}
          />
        );
      })}
    </>
  );
}

export default AccessTagsTableTagList;
