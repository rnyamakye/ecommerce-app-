// src/components/pages/PaymentPage.jsx
import React, { useState } from "react";
import { useCart } from "../CartContext"; // Importing useCart
import { useNavigate } from "react-router-dom"; // Importing useNavigate
import { Button } from "../Button";
import { useOrder } from "../OrderContext"; // Importing useOrder
import PaymentModal from "../PaymentModal"; // Import the PaymentModal component

export const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart(); // Accessing cart items and clear function
  const { addOrder } = useOrder(); // Accessing addOrder function
  const navigate = useNavigate(); // Initialize navigate function

  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedPlans, setSelectedPlans] = useState({});
  const [confirmationMessage, setConfirmationMessage] = useState(""); // State for confirmation message
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleSizeChange = (itemId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [itemId]: size }));
  };

  const handlePlanChange = (itemId, plan) => {
    setSelectedPlans((prev) => ({ ...prev, [itemId]: plan }));
  };

  const handleConfirmPayment = () => {
    // Create an order object for each item in the cart
    cartItems.forEach((item) => {
      const orderDetails = {
        name: item.name,
        image: item.image,
        price: item.price,
        size: selectedSizes[item.id],
        plan: selectedPlans[item.id],
      };
      addOrder(orderDetails);
    });

    // Show confirmation message
    setConfirmationMessage("Your order has been confirmed!");

    // Clear the cart
    clearCart();

    // Navigate to Order History after a delay (optional)
    setTimeout(() => {
      navigate("/order-history");
    }, 5000); // Redirect after 5 seconds
  };

  // Calculate total amount
  const totalAmount = cartItems
    .reduce((total, item) => total + parseFloat(item.price), 0)
    .toFixed(2);

  return (
    <main className="flex flex-col gap-[50px] items-center py-[150px]">
      <h1 className="text-[2rem] font-medium">Checkout Page</h1>
      {confirmationMessage && (
        <div className="bg-green-500 text-white p-2 rounded mb-4">
          {confirmationMessage}
        </div>
      )}
      {cartItems.length > 0 ? (
        <div className="flex flex-col gap-[50px] w-[90vw] items-center">
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-[30px]">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center -border-gray shadow-customShadow border px-5 pt-5 pb-10 rounded-[10px] mb-4 w-full"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[300px] object-cover rounded mb-2"
                />
                <h2 className="text-[1.2rem] uppercase font-medium">
                  {item.name}
                </h2>
                <p className="text-[20px] font-medium">${item.price}</p>

                {/* Size Selection */}
                <div className="flex flex-col mt-4 items-center w-full">
                  <label className="mb-2">Select Size:</label>
                  <div className="flex gap-4">
                    {["S", "M", "L", "XL"].map((size) => (
                      <label
                        key={size}
                        className="flex items-center flex-col gap-2"
                      >
                        <input
                          type="radio"
                          name={`size-${item.id}`}
                          value={size}
                          checked={selectedSizes[item.id] === size}
                          onChange={() => handleSizeChange(item.id, size)}
                          className="mr-2"
                        />
                        <span className="-translate-x-1"> {size}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Payment Plan Selection */}
                <div className="flex flex-col mt-4 w-full items-center">
                  <label className="mb-2">Select Payment Plan:</label>
                  <div className="flex gap-4">
                    {["full", "installments"].map((plan) => (
                      <label key={plan} className="flex items-center">
                        <input
                          type="radio"
                          name={`plan-${item.id}`}
                          value={plan}
                          checked={selectedPlans[item.id] === plan}
                          onChange={() => handlePlanChange(item.id, plan)}
                          className="mr-2"
                        />
                        {plan === "full"
                          ? "Pay in Full"
                          : "Pay in Installments"}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Display total amount */}
          <h2 className="text-[1.2rem] font-medium mt-4">
            Total Amount: ${totalAmount}
          </h2>

          {/* Button to proceed to payment */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="bg-green-500 text-white rounded p-2 mt-4"
          >
            <Button text={"Confirm Payment"} />
          </div>

          {/* Payment Modal */}
          <PaymentModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={(details) => {
              handleConfirmPayment();
              clearCart();
              navigate("/order-history");
            }}
          />
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}

      {/* Button to view order history */}
      <button
        onClick={() => navigate("/order-history")}
        className="bg-gray-500 text-white rounded p-2 mt-4"
      >
        View Order History
      </button>
    </main>
  );
};
