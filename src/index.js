import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/index.scss";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MemoryRouter initialEntries={["/"]}>
    <Provider store={store}>
      <App />
    </Provider>
  </MemoryRouter>
);
