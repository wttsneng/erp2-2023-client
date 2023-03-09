import React from "react";
import AccessTagsUiTag from "./Tag";
import { IAccessTags } from "@src/redux/slices/AccessTags/@types";

interface IProps {
  arr: IAccessTags[];
  onClick: (tag: IAccessTags) => void;
  selectedTags: IAccessTags[];
  [key: string]: any;
}
function AccessTagsUiTagList({ arr, onClick, selectedTags, ...props }: IProps) {
  return (
    <>
      {arr.map((item) => {
        return (
          <AccessTagsUiTag
            key={item.id}
            item={item}
            onClick={onClick}
            selected={selectedTags.some((tag) => tag.id === item.id)}
            deleted={item.deletedAt}
            {...props}
          />
        );
      })}
    </>
  );
}

export default AccessTagsUiTagList;
