import React from "react";
const useTagColor = ({
  deleted,
  readOnly,
  writable,
  selected,
}: {
  deleted: boolean;
  readOnly: boolean;
  writable: boolean;
  selected: boolean;
}):
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | undefined => {
  const color = React.useMemo(() => {
    if (selected) {
      return "primary";
    }
    if (deleted) {
      return "error";
    }
    if (readOnly) {
      return "warning";
    }
    if (writable) {
      return "success";
    }
    return "default";
  }, [deleted, readOnly, writable, selected]);
  return color;
};

export default useTagColor;
