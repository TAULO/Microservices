import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ClockDisplay from "./Components/ClockDisplay/ClockDisplay"
import Clock from "./Components/Clock/Clock"

import User from "./Components/User/User"

ReactDOM.render(
  <React.StrictMode>
    <Clock></Clock>
    <User text="User"></User>
  </React.StrictMode>,
  document.getElementById('root')
);
