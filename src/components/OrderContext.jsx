import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const useOrder = () => {
  return useContext(OrderContext);
};

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const storedOrders = localStorage.getItem("orders");
    return storedOrders ? JSON.parse(storedOrders) : [];
  });

  const addOrder = (order) => {
    setOrders((prevOrders) => {
      const updatedOrders = [...prevOrders, order];
      localStorage.setItem("orders", JSON.stringify(updatedOrders)); // Save to local storage
      return updatedOrders;
    });
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
