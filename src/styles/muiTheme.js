import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  spacing: 4,
  typography: {
    fontSize: 16,
  },
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: 30,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          height: 30,
        },
      },
    },
  },
});
