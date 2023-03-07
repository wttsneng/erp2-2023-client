import React from "react";
import { Checkbox } from "@mui/material";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
function CheckboxMinus({ checked, onChange }) {
  return (
    <Checkbox
      sx={{
        width: "30px",
        height: "30px",
      }}
      checked={checked}
      onChange={onChange}
      icon={<RemoveCircleOutlineOutlinedIcon />}
      checkedIcon={<RemoveCircleOutlinedIcon />}
    />
  );
}

export default CheckboxMinus;
