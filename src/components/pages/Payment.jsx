// src/components/pages/PaymentPage.jsx
import React, { useState } from "react";
import { useCart } from "../CartContext"; // Importing useCart

const PaymentPage = () => {
  const { cartItems } = useCart(); // Accessing cart items

  return (
    <main className="flex flex-col gap-[30px] items-center py-[100px]">
      <h1 className="text-[2rem] font-bold">Payment Page</h1>
      {cartItems.length > 0 ? (
        <div className="flex flex-col items-center md:flex-row">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center border p-4 rounded mb-4 w-full md:w-1/2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-gray-600">${item.price}</p>

              {/* Size Selection */}
              <div className="flex flex-col mt-4">
                <label className="mb-2">Select Size:</label>
                <select className="border rounded p-2 mb-4">
                  <option value="">Select Size</option>
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                  <option value="XL">Extra Large</option>
                </select>

                {/* Payment Plan Selection */}
                <label className="mb-2">Select Payment Plan:</label>
                <select className="border rounded p-2 mb-4">
                  <option value="">Select Payment Plan</option>
                  <option value="full">Pay in Full</option>
                  <option value="installments">Pay in Installments</option>
                </select>

                {/* Button to confirm payment for this item */}
                <button className="bg-green-500 text-white rounded p-2">
                  Confirm Payment for {item.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </main>
  );
};

export default PaymentPage;
