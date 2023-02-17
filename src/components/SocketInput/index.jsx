import React from "react";
import { TextField, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
function SocketInput({
  value,
  label,
  onChange,
  onBlur,
  onFocus,
  disabled,
  onHistoryClick,
  isHistoryShow,
}) {
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <TextField
        label={label}
        value={value}
        disabled={disabled}
        variant={`${disabled ? "filled" : "outlined"}`}
        sx={{
          backgroundColor: `${disabled ? theme.palette.error.light : "white"}`,
          borderRadius: 1,
          width: "100%",
          "& .MuiOutlinedInput-root": {
            paddingRight: `${onHistoryClick ? 30 : 0}px`,
          },
        }}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onBlur={(e) => {
          onBlur(e.target.value);
        }}
        onFocus={() => {
          onFocus();
        }}
      />
      {isHistoryShow && (
        <Typography
          className="fa-solid fa-clock-rotate-left"
          role="button"
          aria-label="history"
          onClick={onHistoryClick}
          sx={{
            position: "absolute",
            cursor: "pointer",
            top: "50%",
            right: 20,
            transform: "translateY(-50%)",
          }}
        ></Typography>
      )}
    </Box>
  );
}
export default SocketInput;
