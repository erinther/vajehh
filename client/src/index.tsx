import React from "react";
import ReactDOM from "react-dom";
import Vajehh from "./App";
import reportWebVitals from "./reportWebVitals";
import "flatifycss/scss/flatify-rtl.scss";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Vajehh />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
