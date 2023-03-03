import React from "react";

import { SocketInput } from "@src/components/Basic";

import { useDispatch, useSelector } from "react-redux";

import {
  socketEmitAccessTagsInputStarted,
  socketEmitAccessTagsInputEnded,
  socketEmitAccessTagsChangeValue,
} from "@src/socket/emits/AccessTags";

import { setAccessTagsHistoryWindowsFieldOpen } from "@src/redux/slices/AccessTags/history/windows/field";

import { selectAccessTagsSelected } from "@src/redux/slices/AccessTags/selected";
import {
  selectAccessTagsEditingsNameSaveBlocked,
  setAccessTagsEditingsNameSaveBlocked,
} from "@src/redux/slices/AccessTags/editings/name";

function AccessTagsEditingInputsChangeName() {
  const dispatch = useDispatch();
  const selectedTags = useSelector(selectAccessTagsSelected);
  const isSaveBlocked = useSelector(selectAccessTagsEditingsNameSaveBlocked);
  const [name, setName] = React.useState("");

  const handleChange = (value) => {
    setName(value);
  };
  const handleBlur = (value) => {
    if (!isSaveBlocked) {
      socketEmitAccessTagsInputEnded({
        itemId: selectedTags[0].id,
        attribute: "name",
      });
      socketEmitAccessTagsChangeValue({
        itemId: selectedTags[0].id,
        attribute: "name",
        value,
      });
      console.log("handleBlur");
    }
  };
  const handleFocus = (value) => {
    socketEmitAccessTagsInputStarted({
      itemId: selectedTags[0].id,
      attribute: "name",
    });
  };

  const handleHistoryClick = () => {
    dispatch(setAccessTagsHistoryWindowsFieldOpen(true));
    dispatch(setAccessTagsEditingsNameSaveBlocked(true));
  };

  React.useEffect(() => {
    if (selectedTags.length === 0) return;
    setName(selectedTags[0].name);
  }, [selectedTags]);

  if (selectedTags.length === 0) return null;
  return (
    <SocketInput
      label="name"
      disabled={false}
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
