// src/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart data from local storage on component mount
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === id);
      if (index !== -1) {
        return [...prevItems.slice(0, index), ...prevItems.slice(index + 1)];
      }
      return prevItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Save cart items to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
