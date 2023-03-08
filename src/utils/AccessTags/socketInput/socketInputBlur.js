import {
  socketEmitAccessTagsInputEnded,
  socketEmitAccessTagsChangeValue,
} from "@src/socket/emits/AccessTags";
function socketInputBlur({
  attribute,
  value,
  initialValue,
  reason,
  id,
  saveBlocked,
}) {
  if (reason === "historyClicked") return;
  if (saveBlocked) return;
  socketEmitAccessTagsInputEnded({
    itemId: id,
    attribute,
  });
  if (value === initialValue) return;
  socketEmitAccessTagsChangeValue({
    itemId: id,
    attribute,
    value,
  });
}

export default socketInputBlur;
