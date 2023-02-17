import React from "react";
import { Chip } from "@mui/material";
function TagsList({ arr, onClick, onDelete, ...props }) {
  return (
    <React.Fragment>
      {arr.map((item) => {
        return (
          <Chip
            key={item.id}
            label={item.name}
            onClick={() => {
              onClick(item);
            }}
            onDelete={() => {}}
            sx={{ marginRight: 1, marginBottom: 1 }}
            {...props}
          />
        );
      })}
    </React.Fragment>
  );
}

export default TagsList;
