import React from "react";
import { TextField, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const SocketInput = React.forwardRef(
  (
    {
      label,
      value,
      onChange,
      onBlur,
      onFocus,
      disabled,
      isHistoryShow,
      onHistoryClick,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();
    return (
      <Box sx={{ position: "relative", width: "100%" }}>
        <TextField
          size="small"
          label={label}
          value={value}
          disabled={disabled}
          variant={`${disabled ? "filled" : "outlined"}`}
          sx={{
            backgroundColor: `${
              disabled ? theme.palette.error.light : "white"
            }`,
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
          ref={ref}
          onFocus={() => {
            onFocus();
          }}
          {...props}
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
              color: `${theme.palette.grey[500]}`,
              "&:hover": {
                color: `${theme.palette.grey[700]}`,
              },
            }}
          ></Typography>
        )}
      </Box>
    );
  }
);
export default SocketInput;
