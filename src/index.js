import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import "./styles/index.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);
