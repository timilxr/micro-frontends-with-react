import React from "react";
import "./app.css";

export default function App() {
  return <>
  <HomePage />
  <RemoteProducts />
  <RemoteCart />
  </>;
}

function HomePage() {
  return <div>Welcome to our micro-frontend store!</div>;
}

function RemoteProducts() {
  const Products = React.lazy(() => import("products/Products"));
  return (<React.Suspense fallback={<p>Loading products...</p>}>
    <Products />
  </React.Suspense>)
}

function RemoteCart() {
  const Cart = React.lazy(() => import("cart/Cart"));
  return (<React.Suspense fallback={<p>loading cart...</p>}><Cart /></React.Suspense>)
}