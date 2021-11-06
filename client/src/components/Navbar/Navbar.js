import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar_item">
        Shopping Center
      </Link>
      <Link className="navbar_item" to="/cart">
        Cart
      </Link>
    </div>
  );
}
