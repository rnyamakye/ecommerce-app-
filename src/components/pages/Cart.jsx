// src/components/pages/CartPage.jsx
import React from "react";
import { useCart } from "../CartContext"; // Importing useCart
import { ShopItemCard } from "../itemCard"; // Assuming you want to reuse this card for displaying in cart
import { useNavigate } from "react-router-dom"; // Importing useNavigate

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart(); // Accessing cart items and remove function
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <main className="flex flex-col gap-[30px] items-center py-[100px]">
      <h1 className="text-[2rem] font-bold">Your Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <div className="flex flex-col md:grid md:grid-cols-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col items-center p-4 rounded mb-4">
                <ShopItemCard
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  category={item.category}
                />
                {/* Button to remove item */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white rounded p-2 mt-2"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Button to proceed to payment */}
          <button 
            onClick={() => navigate('/payment')}
            className="bg-blue-500 text-white rounded p-2 mt-4"
          >
            Proceed to Payment
          </button>

        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </main>
  );
};

export default CartPage;
