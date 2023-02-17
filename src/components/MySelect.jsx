import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
function MySelect({ value, onChange, label, options }) {
  return (
    <FormControl fullWidth>
      <InputLabel id="My-select">{label}</InputLabel>
      <Select
        labelId="My-select"
        id="My-select"
        value={value}
        label={label}
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
