import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  spacing: 4,
  typography: {
    fontSize: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: 27,
          "& .MuiSvgIcon-root": {
            fontSize: "1.7em",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: 30,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          top: "-20% !important",
          marginTop: "-8px !important",
          "& .MuiInputLabel-animated": {
            display: "none !important",
          },
          "& #My-select": {
            display: "none !important",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          top: "-20% !important",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: 30,
          "& .MuiInputBase-input": {
            padding: "5px 14px ",
          },
          "& .MuiAutocomplete-input": {
            padding: "0px 5px !important",
            marginTop: "-5px !important",
          },
          "& .MuiInputLabel-root": {
            marginTop: "-5px !important",
          },
        },
      },
    },
  },
});
