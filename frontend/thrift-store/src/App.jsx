import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// CSS
import "./App.css";

// Components
import Navbar from "./components/base/Navbar";
import Footer from "./components/base/Footer";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Register from "./components/Register";
import PrivateComponents from "./components/PrivateComponents";
import Upload from "./components/Product/Upload";
import UserList from "./components/UserList";
import ProductList from "./components/Product/ProductList";
import VendorRegister from "./components/Vendor/VendorRegister";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          {/* Public Routes */}
          <Route path="/vendor/register" element={<VendorRegister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          {/* Protected Admin Routes */}

          <Route element={<PrivateComponents />}>
            <Route path="/upload" element={<Upload />} />
            <Route path="/admin/usercard" element={<UserList />} />
            <Route path="/admin/productcard" element={<ProductList />} />
          </Route>
        </Routes>
      </div>

      {/* ✅ Footer added here */}
      <Footer />
    </Router>
  );
}

export default App;
