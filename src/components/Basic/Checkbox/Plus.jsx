import React from "react";
import { Checkbox } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
function CheckboxPlus({ checked, onChange }) {
  return (
    <Checkbox
      sx={{
        width: "30px",
        height: "30px",
      }}
      checked={checked}
      onChange={onChange}
      icon={<AddCircleOutlineOutlinedIcon />}
      checkedIcon={<AddCircleIcon />}
    />
  );
}

export default CheckboxPlus;
