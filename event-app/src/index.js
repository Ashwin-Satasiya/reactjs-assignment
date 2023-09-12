import React from "react";

import  ReactDOM  from "react-dom/client";

import './css/style.css';

import Calc from "./components/calc";

import reportWebvitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<>
  <Calc/>
  </>

)

reportWebvitals();