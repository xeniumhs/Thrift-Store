import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Base/Navbar";
import Footer from "./components/Base/Footer";
import Home from "./components/Home";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import './bootstrap.min.css';
import PrivateComponents from "./components/config/PrivateComponents";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<PrivateComponents/>}>
              <Route path="/Features" element={<h1>Features</h1>}/>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
