import React from "react";

export default function Navbar() {
  const user = localStorage.getItem("user");

  const logout = () => {
    localStorage.clear();
  };
  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/function">Upload</a>
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
