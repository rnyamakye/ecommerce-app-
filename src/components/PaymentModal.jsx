// src/components/PaymentModal.jsx
import React, { useState } from "react";
import { Button } from "./Button";

const PaymentModal = ({ isOpen, onClose, onConfirm }) => {
  const [accountDetails, setAccountDetails] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(accountDetails); // Pass account details back to parent
    onClose(); // Close modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center -bg-white bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-[90vw] md:w-[400px]">
        <h2 className="text-lg font-bold mb-4">Enter Payment Details</h2>
        <form className="flex flex-col gap-[10px]" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={accountDetails.name}
              onChange={handleChange}
              required
              className="border rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={accountDetails.cardNumber}
              onChange={handleChange}
              required
              className="border rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Expiry Date (MM/YY)</label>
            <input
              type="text"
              name="expiryDate"
              value={accountDetails.expiryDate}
              onChange={handleChange}
              required
              placeholder="MM/YY"
              className="border rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">CVV</label>
            <input
              type="text"
              name="cvv"
              value={accountDetails.cvv}
              onChange={handleChange}
              required
              className="border rounded w-full p-2"
            />
          </div>
          <div className="flex justify-center">
            <Button text={"Confirm"} />
          </div>
        </form>
        <div className="flex justify-center">
          <button onClick={onClose} className="mt-5 text-[1.2rem]  text-red-500 underline">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
