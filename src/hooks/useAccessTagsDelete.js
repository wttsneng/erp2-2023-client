import { useDispatch, useSelector } from "react-redux";
import { clearAccessTagsInput } from "@src/redux/slices/AccessTags/input";
import { deleteAccessTag } from "@src/redux/slices/AccessTags/data";
import { selectAccessTagsTableSelected } from "@src/redux/slices/AccessTags/table";
function useAccessTagsDelete() {
  const dispatch = useDispatch();
  const accessTagsTableSelected = useSelector(selectAccessTagsTableSelected);
  const onDelete = () => {
    dispatch(clearAccessTagsInput());
    accessTagsTableSelected.forEach(({ id }) => {
      deleteAccessTag({ itemId: id });
    });
  };
  return onDelete;
}

export default useAccessTagsDelete;
