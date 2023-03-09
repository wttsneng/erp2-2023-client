import React from "react";
import { Chip } from "@mui/material";
import WithTooltip from "./WithTooltip";

function AccessTagsUiTag({ selected, onClick, item, deleted, ...props }) {
  return (
    <WithTooltip item={item}>
      <Chip
        label={item.name}
        onClick={(e) => {
          onClick(item);
        }}
        color={selected ? "primary" : deleted ? "warning" : "default"}
        sx={{ marginRight: 1, marginBottom: 1, transition: "none" }}
        {...props}
      />
    </WithTooltip>
  );
}

export default AccessTagsUiTag;
