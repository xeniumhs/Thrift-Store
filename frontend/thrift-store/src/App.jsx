import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// CSS
import "./App.css";

// components
import Navbar from "./components/Base/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateComponents from "./components/PrivateComponents";
import Upload from "./components/Upload";
import UserList from "./components/UserList"; // add this at top with your other imports
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="app==container">
          <Routes>
            <Route path="/" element={<h1>THis is home</h1>} />
            <Route element={<PrivateComponents />}>
              <Route path="/upload" element={<Upload />} />
              <Route path="/admin/usercard" element={<UserList />} />
              <Route path="/admin/productcard" element={<ProductList />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
