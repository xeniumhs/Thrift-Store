import React from "react";
import './Navbar.css';

export default function Navbar() {
  const user = localStorage.getItem("user");

  const logout = () => {
    localStorage.clear();
  };
  return (
    <div className="Navbar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/upload">Upload</a>
        </li>
        {user ? (
          <li>
            <a onClick={logout} href="/login">Logout</a>
            <a href="/profile">profile</a>
          </li>
        ) : (
          <li>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </li>
        )}
      </ul>
    </div>
  );
}
