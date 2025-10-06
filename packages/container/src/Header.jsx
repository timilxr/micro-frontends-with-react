import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return <header className="header">
    <h1>My Micro-Frontend Store</h1>
    <nav className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  </header>;
}