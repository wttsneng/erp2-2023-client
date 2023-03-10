import React from "react";
import Input from "@src/components/Basic/Input/input";
import debounce from "lodash.debounce";

interface SearchProps {
  value: string;
  label: string;
  onChange: (value: any) => void;
  disabled?: boolean;
}
const Search = ({
  value,
  label,
  onChange,
  disabled,
  ...props
}: SearchProps) => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const updateSearchValue = React.useCallback(
    debounce((value: string) => {
      onChange(value);
    }, 500),
    []
  );
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        onChange={onChangeInput}
        {...props}
      />
    </React.Fragment>
  );
};

export default Search;
