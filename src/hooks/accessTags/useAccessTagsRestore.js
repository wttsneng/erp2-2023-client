import { useSelector } from "react-redux";
import { selectAccessTagsSelected } from "@src/redux/slices/AccessTags/selected";

import { socketEmitAccessTagsRestore } from "@src/socket//emits/AccessTags";

function useAccessTagsRestore() {
  const selectedTags = useSelector(selectAccessTagsSelected);
  const handleRestoreClick = () => {
    selectedTags.forEach(({ id }) => {
      socketEmitAccessTagsRestore({ itemId: id });
    });
  };
  return handleRestoreClick;
}

export default useAccessTagsRestore;
