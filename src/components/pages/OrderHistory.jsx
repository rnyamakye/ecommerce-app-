// src/components/pages/OrderHistory.jsx
import React, { useEffect } from "react";
import { useOrder } from "../OrderContext";
import { useNavigate } from "react-router-dom"; // Importing useOrder
import { ButtonWhite } from "../Button";

const OrderHistory = () => {
  const { orders } = useOrder(); // Accessing orders from context
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex flex-col gap-[30px] items-center py-[150px]">
      <h1 className="text-[2rem] md:text-[2.4rem] font-medium">
        Your Order History
      </h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="w-[90vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] px-4">
          {orders.map((order, index) => (
            <div
              key={index}
              className="border -border-gray shadow-customShadow p-4 rounded-[10px] flex flex-col gap-3 mb-4 w-full"
            >
              <img
                src={order.image}
                alt={order.name}
                className="w-full h-48 object-cover rounded mb-2"
              />{" "}
              <h2 className="text-lg font-medium">{order.name}</h2>
              <p>Price: ${order.price}</p>
              <p>Size: {order.size}</p>
              <p>Payment Plan: {order.plan}</p>
            </div>
          ))}
        </div>
      )}
      <div
        onClick={() => navigate("/shop/category/all")}
        className="bg-gray-500 text-white rounded p-2 mt-4"
      >
        <ButtonWhite text={"Continue Shopping"} />
      </div>
    </main>
  );
};

export default OrderHistory;
