import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
function SocketInput({
  value,
  label,
  onChange,
  onBlur,
  onFocus,
  disabled,
  onSave,
  onHistoryClick,
}) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = React.useState(false);
  const [fieldValue, setFieldValue] = React.useState("");
  const inputRef = React.useRef(null);
  const historyButtonRef = React.useRef(null);
  React.useEffect(() => {
    setFieldValue(value);
  }, [value]);
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !inputRef.current.contains(e.target) &&
        !historyButtonRef.current.contains(e.target)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <React.Fragment>
      <TextField
        label={label}
        value={value}
        ref={inputRef}
        disabled={disabled}
        variant={`${disabled ? "filled" : "outlined"}`}
        sx={{
          backgroundColor: `${disabled ? theme.palette.error.light : "white"}`,
          borderRadius: 1,
        }}
        onChange={(e) => {
          onChange(e.target.value);
          setFieldValue(e.target.value);
        }}
        onBlur={(e) => {
          onBlur(e.target.value);
          onSave(fieldValue);
        }}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
      />
      <Button
        variant="contained"
        color="primary"
        ref={historyButtonRef}
        sx={{
          width: "100%",
          display: `${isFocused && onHistoryClick ? "block" : "none"}`,
        }}
        onClick={() => {
          onHistoryClick();
          setIsFocused(true);
        }}
      >
        History
      </Button>
    </React.Fragment>
  );
}
export default SocketInput;
