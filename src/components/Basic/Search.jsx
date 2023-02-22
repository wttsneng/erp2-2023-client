import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import debounce from "lodash.debounce";
function Search({
  value,
  label,
  onChange,
  onBlur,
  onFocus,
  disabled,
  ...props
}) {
  const [inputValue, setInputValue] = React.useState("");
  const updateSearchValue = React.useCallback(
    debounce((value) => {
      onChange(value);
    }, 500),
    []
  );
  const onChangeInput = (e) => {
    setInputValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  React.useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <React.Fragment>
      <TextField
        hiddenLabel
        value={inputValue}
        disabled={disabled}
        // variant={`${disabled ? "filled" : "outlined"}`}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{label}:</InputAdornment>
          ),
        }}
        size="small"
        sx={{ width: "100%" }}
        onChange={(e) => {
          onChangeInput(e);
        }}
        onBlur={(e) => {
          // onBlur(e.target.value);
        }}
        onFocus={() => {
          // onFocus();
        }}
        {...props}
      />
    </React.Fragment>
  );
}

export default Search;
