import React from "react";

import { Checkbox } from "@mui/material";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

function CkeckboxDefault({ checked, onChange }) {
  return (
    <Checkbox
      sx={{
        width: "30px",
        height: "30px",
      }}
      checked={checked}
      onChange={onChange}
      icon={<RadioButtonUncheckedOutlinedIcon />}
      checkedIcon={<RadioButtonCheckedIcon />}
    />
  );
}

export default CkeckboxDefault;
