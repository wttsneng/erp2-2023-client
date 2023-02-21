import React from "react";
import { Button, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTagsInputId,
  clearAccessTagsInput,
  createAccessTag,
  deleteAccessTag,
} from "../../redux/slices/AccessTagsInputSlice";
import {
  multiAddRemoveSelectedAccessTag,
  selectAccessTagsTableSelected,
} from "../../redux/slices/AccessTagsTableSlice";

function AccessTagsAddDelete() {
  const dispatch = useDispatch();
  const accessTagsAddedId = useSelector((state) => state.accessTags.addedId);
  const accessTagsTableSelected = useSelector(selectAccessTagsTableSelected);

  const handleAddClick = () => {
    dispatch(clearAccessTagsInput());
    createAccessTag({
      name: "New Access tag",
      description: "New description",
    });
  };
  const handleDeleteClick = () => {
    dispatch(clearAccessTagsInput());
    accessTagsTableSelected.forEach((id) => {
      deleteAccessTag({ itemId: id });
    });
  };

  React.useEffect(() => {
    if (accessTagsAddedId) {
      dispatch(setAccessTagsInputId(accessTagsAddedId));
      dispatch(multiAddRemoveSelectedAccessTag(accessTagsAddedId));
    }
  }, [accessTagsAddedId]);

  return (
    <div className="buttons">
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          onClick={handleAddClick}
          sx={{ width: { xs: "50%", md: "initial" } }}
        >
          <AddCircleOutlineIcon />
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ width: { xs: "50%", md: "initial" } }}
          onClick={handleDeleteClick}
        >
          <DeleteOutlineIcon />
        </Button>
      </Stack>
    </div>
  );
}

export default AccessTagsAddDelete;
