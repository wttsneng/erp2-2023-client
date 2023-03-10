import { socket } from "@src/core";
export const socketEmitAccessTagsChangeValue = ({
  itemId,
  attribute,
  value,
}) => {
  socket.emit("changeAccessTagsValue", { itemId, attribute, value });
};
export const socketEmitAccessTagsCreate = ({ name, description }) => {
  socket.emit("createAccessTag", { name, description });
};
export const socketEmitAccessTagsDelete = (id) => {
  socket.emit("deleteAccessTag", id);
};
export const socketEmitAccessTagsRestore = (id) => {
  socket.emit("restoreAccessTag", id);
};
export const socketEmitAccessTagsInputStarted = ({ itemId, attribute }) => {
  socket.emit("changeAccessTagsValueStart", { itemId, attribute });
};
export const socketEmitAccessTagsInputEnded = ({ itemId, attribute }) => {
  console.log("socketEmitAccessTagsInputEnded", { itemId, attribute });
  socket.emit("changeAccessTagsValueEnd", { itemId, attribute });
};
