import React from "react";

import { SocketInput } from "@src/components/Basic";

import { socketInputBlur, socketInputFocus } from "@src/utils/AccessTags";
import { useAccessTagsTranslation } from "@src/hooks/accessTags";

import { useDispatch, useSelector } from "react-redux";
import { setAccessTagsHistoryWindowsFieldOpen } from "@src/redux/slices/AccessTags/history/windows/field";
import { selectAccessTagsSelected } from "@src/redux/slices/AccessTags/selected";
import {
  setAccessTagsEditingsDescriptionSaveBlocked,
  selectAccessTagsEditingsDescriptionSaveBlocked,
} from "@src/redux/slices/AccessTags/editings/description";
import { setAccessTagsHistoryFiltersFieldField } from "@src/redux/slices/AccessTags/history/filters/field";

function AccessTagsEditingInputsChangeDescription() {
  const dispatch = useDispatch();
  const { t } = useAccessTagsTranslation();

  const selectedTags = useSelector(selectAccessTagsSelected);
  const saveBlocked = useSelector(
    selectAccessTagsEditingsDescriptionSaveBlocked
  );
  const editingItems = useSelector(
    (state) => state.accessTags.data.main.editingItems
  );
  const disabled = editingItems.description.includes(selectedTags[0].id);
  const [description, setDescription] = React.useState("");
  const [firstRender, setFirstRender] = React.useState(true);

  const handleChange = (value) => {
    setDescription(value);
  };
  const handleBlur = (value, reason) => {
    socketInputBlur({
      value,
      reason,
      attribute: "description",
      saveBlocked,
      initialValue: selectedTags[0].description,
      id: selectedTags[0].id,
    });
  };

  const handleFocus = (value) => {
    socketInputFocus({ id: selectedTags[0].id, attribute: "description" });
  };

  const handleHistoryClick = () => {
    dispatch(setAccessTagsHistoryWindowsFieldOpen(true));
    dispatch(setAccessTagsEditingsDescriptionSaveBlocked(true));
    dispatch(setAccessTagsHistoryFiltersFieldField("description"));
  };

  React.useEffect(() => {
    setDescription(selectedTags[0].description);
  }, [selectedTags]);

  React.useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }
  }, [firstRender]);

  React.useEffect(() => {
    if (!saveBlocked && !firstRender) {
      handleBlur(description);
    }
  }, [saveBlocked]);

  return (
    <SocketInput
      label={t("description")}
      disabled={disabled}
      value={description}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onHistoryClick={handleHistoryClick}
      historyNeeded={true}
    />
  );
}

export default AccessTagsEditingInputsChangeDescription;
