import React from "react";
import { useSelector } from "react-redux";
import { selectAccessTagsSelected } from "@src/redux/slices/AccessTags/selected";

type IReturn = (Components: React.FC) => React.FC;

const withCheck: IReturn = (Components) => {
  return function WithCheck(props) {
    const selectedTags = useSelector(selectAccessTagsSelected);
    if (selectedTags[0] && !selectedTags[0].deletedAt) {
      return <Components {...props} />;
    }
    return <></>;
  };
};

export default withCheck;
