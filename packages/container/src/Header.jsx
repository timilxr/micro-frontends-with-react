import React from "react";
import { Link } from "react-router-dom";
import {useCart} from "cart/CartContext";

export default function Header() {
    const { items } = useCart();

  return <header className="header">
    <h1>My Micro-Frontend Store</h1>
    <nav className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart({items.length})</Link>
    </nav>
  </header>;
}