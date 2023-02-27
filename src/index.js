import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureAppStore from "./redux/store";

import "./styles/index.scss";
import { theme } from "./styles/muiTheme";
import { ThemeProvider } from "@mui/material/styles";

export const store = configureAppStore();
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
