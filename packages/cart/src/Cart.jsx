import React from "react";
import "./cart.css";
import { useCart } from "./CartContext";

export default function Cart({recommendations}) {
  const {items, addItem, removeItem, clearCart} = useCart();

  const groupedItems = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {Object.entries(groupedItems).map(([item, quantity]) => (
              <li key={item} className="cart-item">
                <span className="item-name">{item}</span>
                <span>Quantity: {quantity}</span>
                <div className="quantity-controls">
                  <button className="add-button" onClick={() => addItem(item)}>Add one</button>
                </div>
                <button className="remove-button" onClick={() => removeItem(item)}>Remove one</button>
              </li>
            ))}
          </ul>
          <button className="clear-button" onClick={clearCart} disabled={items.length === 0}>
            Clear Cart
          </button>
        </>
      )}

      {
        (recommendations && Object.keys(recommendations).length > 0) && (
          <div className="recommendations">
            <h3>Recommendations</h3>
            <ul>
              {Object.values(recommendations).map(product => (
                <li key={product.id} className="recommended-product">
                  <span>{product.name}</span>
                  <button className="add-recommendation-button" onClick={() => addItem(product.name)}>Add to Cart</button>
                </li>
              ))}
            </ul>
          </div>
        )
      }
    </div>
  );
}
