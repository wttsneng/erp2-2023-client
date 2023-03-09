import React from "react";
import { useSelector } from "react-redux";
import { selectAccessTagsSelected } from "@src/redux/slices/AccessTags/selected";

function withCheck(Components) {
  return function WithCheck(props) {
    console.log("withCheck", JSON.stringify(props));
    const selectedTags = useSelector(selectAccessTagsSelected);
    if (selectedTags[0] && !selectedTags[0].deletedAt) {
      return <Components {...props} />;
    }
  };
}

export default withCheck;
