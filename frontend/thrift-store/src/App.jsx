import React, { useEffect, useState } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";

// CSS
import "./App.css";

// components
import Navbar from "./components/Base/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateComponents from "./components/PrivateComponents";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<h1>THis is home</h1>}/>
        <Route element={<PrivateComponents/>}>
          <Route path="/function" element={<h1>upload here</h1>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    
    </BrowserRouter>
      
    </>
  );
}

export default App;
