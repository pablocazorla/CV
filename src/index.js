import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/style.css";
import "./assets/css/font-awesome/css/font-awesome.min.css";
import "./assets/css/theme.css";
import "./assets/css/pcazorlaui.css";
import App from "./cv/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
