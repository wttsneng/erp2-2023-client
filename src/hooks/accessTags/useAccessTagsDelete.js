import { useSelector } from "react-redux";
import { socketEmitAccessTagsDelete } from "@src/socket/emits/AccessTags";
import { selectAccessTagsSelected } from "@src/redux/slices/AccessTags/selected";

function useAccessTagsDelete() {
  const accessTagsSelected = useSelector(selectAccessTagsSelected);
  const onDelete = () => {
    accessTagsSelected.forEach(({ id }) => {
      socketEmitAccessTagsDelete({ itemId: id });
    });
  };
  return onDelete;
}

export default useAccessTagsDelete;
