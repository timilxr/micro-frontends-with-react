import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./products.css";

import {useCart} from "cart/CartContext";

const DUMMY_PRODUCTS = [
    { id: 1, name: "Product 1", description: "Description of Product 1", price: 29.99 },
    { id: 2, name: "Product 2", description: "Description of Product 2", price: 39.99 },
    { id: 3, name: "Product 3", description: "Description of Product 3", price: 19.99 },
];
export default function ProductList() {
    const [products] = useState(DUMMY_PRODUCTS);
    const { addItem } = useCart();

  return <div>
    <h2>Product List</h2>
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <div>
            {product.name} <b>${product.price}</b>
          </div>
          <div className="product-actions">
            <Link to={`./${product.id}`} className="button">View Details</Link>
            <button className="button" onClick={()=> addItem(product.name)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
    </div>;
}
