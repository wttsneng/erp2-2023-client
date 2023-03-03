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
      onFocus,
      disabled,
      historyNeeded,
      onHistoryClick,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();
    const [isInputFocused, setIsInputFocused] = React.useState(false);
    const handleBlur = (value) => {
      if (isInputFocused) {
        setIsInputFocused(false);
        onBlur(value);
      }
    };
    const handleFocus = (value) => {
      setIsInputFocused(true);
      onFocus(value);
    };

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
          onBlur={(e) => setTimeout(() => handleBlur(e.target.value), 0)}
          onFocus={(e) => handleFocus(e.target.value)}
          {...props}
        />
        {historyNeeded && (
          <Typography
            className="fa-solid fa-clock-rotate-left"
            role="button"
            aria-label="history"
            onClick={onHistoryClick}
            onMouseDown={() => setIsInputFocused(false)}
            onFocus={() => setIsInputFocused(true)}
            sx={{
              opacity: isInputFocused ? 1 : 0,
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
