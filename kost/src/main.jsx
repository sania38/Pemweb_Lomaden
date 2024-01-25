import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;


import "bootstrap/dist/css/bootstrap.min.css";
import "./dist/css/main.css";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
