import React from "react";
import { InputAdornment } from "@mui/material";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)(({ theme }) => ({
  height: "30px",
  "& .MuiOutlinedInput-root": {
    height: "30px",
    "& fieldset": {},
  },
  "& .MuiAutocomplete-input": {
    marginTop: "-15px",
  },
  "& .MuiInputAdornment-root": {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    marginRight: "4px",
  },
  "& .MuiInputBase-input": {
    padding: "0px",
    "&::placeholder": {
      [theme.breakpoints.up("md")]: {
        opacity: 0,
      },
    },
  },
  "& .MuiAutocomplete-endAdornment": {
    top: "calc(50% - 16px)",
  },
  "& .Mui-disabled": {
    backgroundColor: theme.palette.grey[300],
  },
  "& .MuiList-root": {
    padding: "0px",
  },
}));

const Input = React.forwardRef(({ ...props }, ref) => {
  return (
    <StyledTextField
      fullWidth
      ref={ref}
      placeholder={props.label}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{`${
            props.label ? `${props.label}:` : ""
          }`}</InputAdornment>
        ),
      }}
      {...props}
      label={null}
    />
  );
});

export default Input;
