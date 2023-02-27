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
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: 30,
          "& .MuiInputBase-input": {
            padding: "5px 14px",
          },
        },
      },
    },
  },
});
