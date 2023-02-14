import React from "react";
import { TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
function SocketInput({ value, label, onChange, onBlur, onFocus, disabled }) {
  const theme = useTheme();
  return (
    <TextField
      label={label}
      value={value}
      disabled={disabled}
      variant={`${disabled ? "filled" : "outlined"}`}
      sx={{
        backgroundColor: `${disabled ? theme.palette.error.light : "white"}`,
        borderRadius: 1,
      }}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      onBlur={(e) => {
        onBlur(e.target.value);
      }}
      onFocus={onFocus}
    />
  );
}
export default SocketInput;
