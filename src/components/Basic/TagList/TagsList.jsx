import React from "react";
import { Chip, Tooltip } from "@mui/material";
function TagsList({ arr, onClick, selectedTags, onContextMenu, ...props }) {
  return (
    <React.Fragment>
      {arr.map((item) => {
        return (
          <Tooltip title={item.description} key={item.id}>
            <Chip
              label={item.name}
              onClick={(e) => {
                onClick(item);
              }}
              onContextMenu={(e) => {
                e.preventDefault();
                onContextMenu(e.currentTarget);
              }}
              color={selectedTags.includes(item.id) ? "primary" : "default"}
              sx={{ marginRight: 1, marginBottom: 1 }}
              {...props}
            />
          </Tooltip>
        );
      })}
    </React.Fragment>
  );
}

export default TagsList;
