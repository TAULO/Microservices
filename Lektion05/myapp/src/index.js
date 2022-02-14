import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Website from "./Components/Website/Website"
import Login from "./Components/Header/Login/Login"
import Signup from "./Components/Header/Signup/Signup"

ReactDOM.render(
  <React.StrictMode>
    <Footer></Footer>
      <BrowserRouter>
        <Header></Header>
        <Routes> 
          <Route path="/" element={<Website></Website>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
