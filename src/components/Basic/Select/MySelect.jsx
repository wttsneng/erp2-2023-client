import MenuItem from "@src/components/Basic/Menu/MenuItem";
import Input from "@src/components/Basic/Input/input";
import { FormControl, Select as MuiSelect, InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import { visuallyHidden } from "@mui/utils";
import { useTheme } from "@emotion/react";

const Select = styled(MuiSelect)(({ theme }) => ({
  height: "30px",
  padding: "0px 10px",
}));
function MySelect({ value, onChange, options, label }) {
  const theme = useTheme();
  return (
    <FormControl fullWidth hiddenLabel={true}>
      {!value && (
        <InputLabel
          id="my-select"
          sx={{
            top: "-13px",
            "&.Mui-focused": {
              opacity: 0,
            },
          }}
        >
          {label}
        </InputLabel>
      )}
      <Select value={value} onChange={onChange} labelId="my-select">
        {Array.isArray(options)
          ? options.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))
          : Object.keys(options).map((key) => (
              <MenuItem key={key} value={key}>
                {options[key]}
              </MenuItem>
            ))}
      </Select>
    </FormControl>
  );
}

export default MySelect;
