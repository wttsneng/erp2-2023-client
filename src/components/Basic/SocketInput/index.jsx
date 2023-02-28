import React from "react";
import { Typography, Box } from "@mui/material";
import Input from "../Input/input";
import { useTheme } from "@mui/material/styles";
const SocketInput = React.forwardRef(
  (
    {
      label,
      value,
      onChange,
      onBlur,
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
        <Input
          ref={ref}
          value={value}
          disabled={disabled}
          sx={{
            "& .MuiOutlinedInput-root": {
              paddingRight: `${onHistoryClick ? 30 : 0}px`,
            },
          }}
          label={label}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          onBlur={(e) => {
            onBlur(e.target.value);
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
