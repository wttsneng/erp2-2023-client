import { socketEmitAccessTagsInputStarted } from "@src/socket/emits/AccessTags";
function socketInputFocus({ id, attribute }) {
  socketEmitAccessTagsInputStarted({
    itemId: id,
    attribute: attribute,
  });
}

export default socketInputFocus;
