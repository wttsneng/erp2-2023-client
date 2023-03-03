import {
  FormControl,
  Select as MuiSelect,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Select = styled(MuiSelect)(({ theme }) => ({
  height: "30px",
  padding: "0px 10px",
  "& .MuiSelect-select": {
    padding: "0px 0px",
  },
}));
function MySelect({ value, onChange, options, label }) {
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
