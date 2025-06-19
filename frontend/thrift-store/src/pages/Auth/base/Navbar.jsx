import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { logout as logoutAction } from "../../../redux/features/auth/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth); // 👈 Get from Redux

  const logout = () => {
    dispatch(logoutAction()); // Clear from Redux
    localStorage.removeItem("user"); // Optional: if you stored it
    navigate("/login");
  };

  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/upload">Upload</Link>
        </li>
        <li>
          <Link to="/vendor/register">Become a Vendor</Link>
        </li>

        {userInfo ? (
          <>
            <li>
              <Link to="/profile">👤 {userInfo.username}</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
            
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
        <li>
          <Link to="/aboutus">AboutUs</Link>
        </li>
         <li>
          <Link to="/contactus">ContactUs</Link>
        </li>
      </ul>
    </div>
  );
}
