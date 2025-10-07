import React, {useState} from "react";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import { CartProvider } from "cart/CartContext";

export default function App() {
  const [recommendations, setRecommendations] = useState({});

  const viewedProduct = (product) => {
    setRecommendations((prev)=>({...prev, [product.id]: product}));
  }


  return (
    <CartProvider>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/products/*" element={<RemoteProducts viewedProduct={viewedProduct} />} />
          <Route path="/cart" element={<RemoteCart recommendations={recommendations} />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

function HomePage() {
  return <div>Welcome to our micro-frontend store!</div>;
}

function RemoteProducts({viewedProduct}) {
  const Products = React.lazy(() => import("products/Products"));
  return (<React.Suspense fallback={<p>Loading products...</p>}>
    <Products viewedProduct={viewedProduct} />
  </React.Suspense>)
}

function RemoteCart({recommendations}) {
  const Cart = React.lazy(() => import("cart/Cart"));
  return (<React.Suspense fallback={<p>loading cart...</p>}><Cart recommendations={recommendations} /></React.Suspense>)
}