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
    const [focused, setFocused] = React.useState(false);
    const [historyClicked, setHistoryClicked] = React.useState(false);

    const handleBlur = (value) => {
      let reason = "clickAway";
      setFocused(false);
      if (historyClicked) {
        reason = "historyClicked";
        onBlur(value, reason);
        return;
      }
      onBlur(value);
    };

    const handleFocus = (value) => {
      setFocused(true);
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
              paddingRight: `${onHistoryClick ? 35 : 0}px`,
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
        {historyNeeded && !disabled && (
          <Typography
            className="fa-solid fa-clock-rotate-left"
            role="button"
            aria-label="history"
            onClick={onHistoryClick}
            onMouseDown={() => setHistoryClicked(true)}
            onMouseUp={() => setHistoryClicked(false)}
            onTouchStart={() => setHistoryClicked(true)}
            onTouchEnd={() => setHistoryClicked(false)}
            sx={{
              opacity: focused ? 1 : 0,
              position: "absolute",
              cursor: "pointer",
              top: "50%",
              right: 10,
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
