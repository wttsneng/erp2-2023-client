import React from "react";
import { Chip, Tooltip } from "@mui/material";

function TagsList({ arr, onClick, selectedTags, ...props }) {
  return (
    <React.Fragment>
      {arr.map((item) => {
        return (
          <Tooltip disableInteractive title={item.description} key={item.id}>
            <Chip
              label={item.name}
              onClick={(e) => {
                onClick(item);
              }}
              color={
                selectedTags.some((tag) => tag.id === item.id)
                  ? "primary"
                  : item.deletedAt
                  ? "warning"
                  : "default"
              }
              sx={{ marginRight: 1, marginBottom: 1, transition: "none" }}
              {...props}
            />
          </Tooltip>
        );
      })}
    </React.Fragment>
  );
}

export default TagsList;
