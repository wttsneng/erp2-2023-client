import React from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
function MySelect({ value, onChange, options, label }) {
  return (
    <FormControl fullWidth label="sdfs">
      {label ? <InputLabel id="My-select">{label}</InputLabel> : null}
      <Select
        size="small"
        labelId="My-select"
        id="My-select"
        value={value}
        onChange={onChange}
      >
        {Array.isArray(options)
          ? options.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))
          : Object.keys(options).map((key) => (
              <MenuItem key={key} value={key}>
                {options[key]}
              </MenuItem>
            ))}
      </Select>
    </FormControl>
  );
}

export default MySelect;
