// src/components/pages/ItemDetails.js
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../CartContext";
import { itemData } from "../../assets/Data";// Assuming you have a product data source

const ItemDetails = () => {
  const { id } = useParams(); // Get the item ID from the URL
  const { addToCart } = useCart();

  // Find the selected item from the product data
  const item = itemData.find((product) => product.id === id);

  // State for quantity
  const [quantity, setQuantity] = useState(1);

  // Function to handle adding to cart
  const handleAddToCart = () => {
    const cartItem = {
      id: item.name,
      image: item.image,
      name: item.name,
      price: item.price,
    };
    addToCart(cartItem);
  };

  // Get three random similar items (excluding the current item)
//   const similarItems = itemData
//     .filter((product) => product.name !== id)
//     .sort(() => 0.5 - Math.random())
//     .slice(0, 3);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{item.name}</h2>
      <img src={item.image} alt={item.name} className="w-full h-auto" />
      <p className="text-lg font-semibold">${item.price}</p>
      <div className="flex items-center mt-4">
        <button
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          -
        </button>
        <span className="mx-2 text-lg">{quantity}</span>
        <button
          onClick={() => setQuantity((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-4 px-6 py-3 bg-blue-500 text-white rounded"
      >
        Add to Cart
      </button>

      <h3 className="mt-8 text-xl font-semibold">Similar Items</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {/* {similarItems.map((similarItem) => (
          <Link
            key={similarItem.name}
            to={`/shop/${similarItem.name}`}
            className="border p-4 flex flex-col items-center"
          >
            <img
              src={similarItem.image}
              alt={similarItem.name}
              className="w-full h-auto"
            />
            <span>{similarItem.name}</span>
            <span>${similarItem.price}</span>
          </Link>
        ))} */}
      </div>
    </div>
  );
};

export default ItemDetails;
