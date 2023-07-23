import React from "react";
import ReactDOM from "react-dom/client";
// import AppClassBased from './AppClassBased.jsx'
import AppFunctionBased from "./AppFunctionBased.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppFunctionBased />
  </React.StrictMode>
);
