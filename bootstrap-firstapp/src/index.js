import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css"; // Include CSS

import "bootstrap-icons/font/bootstrap-icons.min.css"; // Include ICONS

import BTN from "./components/ButtonApp";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BTN />
  </>
);

reportWebVitals();
