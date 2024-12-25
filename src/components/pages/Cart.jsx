// src/components/pages/CartPage.jsx
import React, { useEffect } from "react";
import { useCart } from "../CartContext"; // Importing useCart
import { ShopItemCard } from "../itemCard"; // Assuming you want to reuse this card for displaying in cart
import { useNavigate } from "react-router-dom"; // Importing useNavigate
import { ButtonWhite, Button } from "../Button";
import { IoClose } from "react-icons/io5";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart(); // Accessing cart items and functions
  const navigate = useNavigate(); // Initialize navigate function

  const handleProceedToPayment = () => {
    navigate("/checkout"); // Navigate to payment page without clearing the cart
  };

  return (
    <main className="flex flex-col gap-[50px] items-center py-[150px] w-[95vw]">
      <h1 className="text-[2rem] font-medium">YOUR CART</h1>
      {cartItems.length > 0 ? (
        <>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col items-center p-4 rounded mb-4"
              >
                <ShopItemCard
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  category={item.category}
                />
                {/* Quantity adjustment controls */}
                <div className="flex items-center mt-2 text-[2rem]">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 absolute top-3 text-white rounded p-2 mt-2 text-[2rem] right-3"
                  >
                    <IoClose />
                  </button>
                  <div className="flex items-center -text-white -bg-blue">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="px-4 py-2 bg-gray-300 rounded"
                    >
                      -
                    </button>
                    <span className="mx-2 text-[1.5rem] -text-black -bg-white px-3">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-4 py-2 bg-gray-300 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Button to proceed to payment */}
          <div
            onClick={handleProceedToPayment}
            className="bg-blue-500 text-white rounded p-2 mt-4"
          >
            <Button text={"Proceed to Payment"} />
          </div>
          {/* Button to clear the cart */}
          <button
            onClick={clearCart}
            className="bg-yellow-500 text-white rounded p-2 mt-4"
          >
            Clear Cart
          </button>
          <div
            className="bg-gray-500 text-white rounded p-2 hover:bg-gray-600"
            onClick={() => navigate("/shop/category/all")}
          >
            <ButtonWhite text={"Continue Shopping"} />
          </div>
        </>
      ) : (
        <div className="h-[50vh] flex flex-col items-center justify-around">
          <p className="text-[2rem] md:text-[2.4rem] flex items-center gap-2">
            Your cart is empty.
          </p>
          <div
            className="bg-gray-500 text-white rounded p-2 hover:bg-gray-600"
            onClick={() => navigate("/shop/category/all")}
          >
            <ButtonWhite text={"Continue Shopping"} />
          </div>
          <button
            onClick={() => navigate("/order-history")}
            className="bg-gray-500 text-white rounded p-2 mt-4"
          >
            View Order History
          </button>
        </div>
      )}
    </main>
  );
};

export default CartPage;
