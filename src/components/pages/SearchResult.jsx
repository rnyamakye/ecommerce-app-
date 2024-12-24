// src/SearchResults.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { itemData } from "../../assets/Data"; // Import your data
import { ShopItemCard } from "../itemCard";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query") || "";

  // Filter items based on the search query
  const filteredItems = itemData.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="flex flex-col gap-[30px] items-center py-[150px] mx-5">
      <h1 className="text-[2rem] font-medium text-center">Search Results for "{query}"</h1>
      <div className="flex flex-col gap-[30px] items-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-[20px]">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <ShopItemCard
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              category={item.category}
            />
          ))
        ) : (
          <div className="h-[50vh] w-[100vw] flex items-center justify-center">
            <p className="text-[2rem] text-center">
              No items found matching your search.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default SearchResults;
