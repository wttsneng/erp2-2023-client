import React from "react";

import { SocketInput } from "@src/components/Basic";

import { socketInputBlur, socketInputFocus } from "@src/utils/AccessTags";

import { useAccessTagsTranslation } from "@src/hooks/accessTags";

import { useDispatch, useSelector } from "react-redux";
import { setAccessTagsHistoryWindowsFieldOpen } from "@src/redux/slices/AccessTags/history/windows/field";
import { selectAccessTagsSelected } from "@src/redux/slices/AccessTags/selected";
import {
  selectAccessTagsEditingsNameSaveBlocked,
  setAccessTagsEditingsNameSaveBlocked,
} from "@src/redux/slices/AccessTags/editings/name";
import { setAccessTagsHistoryFiltersFieldField } from "@src/redux/slices/AccessTags/history/filters/field";

function AccessTagsEditingInputsChangeName() {
  const dispatch = useDispatch();
  const { t } = useAccessTagsTranslation();

  const selectedTags = useSelector(selectAccessTagsSelected);
  const saveBlocked = useSelector(selectAccessTagsEditingsNameSaveBlocked);
  const editingItems = useSelector(
    (state) => state.accessTags.data.main.editingItems
  );
  const disabled = editingItems.name.includes(selectedTags[0].id);

  const [name, setName] = React.useState("");
  const [firstRender, setFirstRender] = React.useState(true);

  const handleChange = (value) => {
    setName(value);
  };
  const handleBlur = (value, reason) => {
    socketInputBlur({
      value,
      reason,
      attribute: "name",
      saveBlocked,
      initialValue: selectedTags[0].name,
      id: selectedTags[0].id,
    });
  };

  const handleFocus = (value) => {
    socketInputFocus({ id: selectedTags[0].id, attribute: "name" });
  };

  const handleHistoryClick = () => {
    dispatch(setAccessTagsHistoryWindowsFieldOpen(true));
    dispatch(setAccessTagsEditingsNameSaveBlocked(true));
    dispatch(setAccessTagsHistoryFiltersFieldField("name"));
  };

  React.useEffect(() => {
    setName(selectedTags[0].name);
  }, [selectedTags]);

  React.useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }
  }, [firstRender]);

  React.useEffect(() => {
    if (!saveBlocked && !firstRender) {
      handleBlur(name);
    }
  }, [saveBlocked]);

  return (
    <SocketInput
      label={t("name")}
      disabled={disabled}
      value={name}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onHistoryClick={handleHistoryClick}
      historyNeeded={true}
    />
  );
}

export default AccessTagsEditingInputsChangeName;
