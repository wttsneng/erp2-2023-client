import React from "react";
import { socket } from "@src/core";
import accessTagsEventCollection from "@src/socket/eventHandlers/AccessTags";
export function useAccessTagsSocketEvents() {
  React.useEffect(() => {
    socket.onAny((event, ...args) => {
      console.log(event, ...args);
      if (accessTagsEventCollection[event]) {
        accessTagsEventCollection[event](args[0]);
      }
    });
    return () => {
      socket.offAny();
    };
  }, []);
}
