import React from "react";
import { Skeleton } from "@mui/material";
function TagsListLoading() {
  return Array(50)
    .fill(0)
    .map((_, index) => (
      <Skeleton
        key={index}
        variant="rounded"
        width="125px"
        height="32px"
        sx={{
          marginBottom: 0.5,
          marginRight: 1,
          display: "inline-block",
          borderRadius: 12,
        }}
      />
    ));
}

export default TagsListLoading;
