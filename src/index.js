import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import * as serviceWorker from "./serviceWorker";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top.component";
import axios from "axios";
import Cookies from "universal-cookie";

import { store, persistor } from "./redux/store";

import "./index.css";
import App from "./App";

const cookies = new Cookies();
const token = cookies.get("authToken");

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://bon-vivant.herokuapp.com"
    : "http://localhost:5000";
axios.defaults.headers.common["x-access-token"] = token;
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <ScrollToTop />
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
