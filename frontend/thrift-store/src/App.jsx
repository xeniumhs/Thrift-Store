import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Base/Navbar";
import Login from "./components/Login";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<h1>THis is home</h1>}/>
        <Route path="/function" element={<h1>upload here</h1>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    
    </BrowserRouter>
      
    </>
  );
}

export default App;
