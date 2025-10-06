import React from "react";
import ReactDOM from "react-dom/client";
import Cart from "./Cart";
import { CartProvider } from "./CartContext";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<CartProvider><Cart /></CartProvider>);
