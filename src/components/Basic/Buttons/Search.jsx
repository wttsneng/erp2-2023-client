import React from "react";

import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchButton({ onClick }) {
  return (
    <Button variant="contained" color="info" onClick={onClick}>
      <SearchIcon />
    </Button>
  );
}

export default SearchButton;
