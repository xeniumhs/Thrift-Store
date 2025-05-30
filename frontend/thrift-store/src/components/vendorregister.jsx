import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/VendorRegister.css"; // ✅ CSS path

export default function VendorRegister() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    shopName: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Registered Vendor:", formData);
    alert("Vendor registered!");
    navigate("/login");
  };

  return (
    <div className="vendor-register-container">
      <h2>Become a Vendor</h2>
      <form onSubmit={handleSubmit} className="vendor-register-form">
        {/* Personal Info */}
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        {/* Shop Info */}
        <input
          type="text"
          name="shopName"
          placeholder="Shop Name"
          value={formData.shopName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Passwords */}
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}