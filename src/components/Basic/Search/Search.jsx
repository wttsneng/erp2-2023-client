import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import Input from "@src/components/Basic/Input/input";
import debounce from "lodash.debounce";
function Search({ value, label, onChange, disabled, ...props }) {
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
      <Input
        value={inputValue}
        disabled={disabled}
        variant={`${disabled ? "filled" : "outlined"}`}
        label={label}
        size="small"
        sx={{ width: "100%" }}
        onChange={(e) => {
          onChangeInput(e);
        }}
        {...props}
      />
    </React.Fragment>
  );
}

export default Search;
