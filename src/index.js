import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./utils/store";
axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.headers.common["Authorization"] = "Bearer Auth Token";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      style={{ width: "100%" }} // Set the container width to 100% of the screen
    />
    ;
  </React.StrictMode>
);
