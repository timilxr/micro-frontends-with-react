import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload].sort() };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((_, i) => i !== state.items.findIndex((item) => item === action.payload)).sort(), };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
        return state;
  }
  
}


const initialCartState = { items: ["Laptop", "Mobile"] };

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialCartState);
    
    const addItem = (item) => dispatch({ type: 'ADD_ITEM', payload: item });
    const removeItem = (item) => dispatch({ type: 'REMOVE_ITEM', payload: item });
    const clearCart = () => dispatch({ type: 'CLEAR_CART' });
    
    const value = React.useMemo(
        () => ({ items: state.items, addItem, removeItem, clearCart }),
        [state.items, addItem, removeItem, clearCart]
    );
    
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

function useCart() {
    const context = React.useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

export { CartProvider, CartContext, useCart };