import { useParams, NavLink } from "react-router-dom";
import { itemData } from "../../assets/Data"; // Import your data
import { ShopItemCard } from "../itemCard";
import { FaChevronRight } from "react-icons/fa6";
import { useEffect } from "react";

export const Shop = () => {
  const { category } = useParams(); // Get the category from the URL

  // Determine if we should filter by category or show all items
  const filteredItems =
    category === "all"
      ? itemData // Show all items if category is 'all'
      : itemData.filter((item) => item.category === category); // Filter by specific category

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex flex-col gap-[100px] md:gap-[150px] lg:gap-[100px] overflow-x-hidden w-[100vw] items-center pb-[100px] pt-[15rem]">
      <header className="flex flex-col gap-[50px] lg:mx-10 items-center">
        <div className="flex flex-col items-center gap-[20px]">
          <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-bold capitalize">
            Shop
          </h1>
          <div className="flex items-center md:text-[21px] gap-5">
            <span>Home</span>
            <FaChevronRight className="text-[1rem]" />
            <span className="-text-blue">Shop</span>
          </div>
        </div>
        <div className="flex gap-[10px] md:gap-[20px] text-[1.2rem] md:text-[1.8rem]">
          {/* Links for filtering */}
          <NavLink
            to="/shop/category/all"
            className=" font-medium"
            style={({ isActive }) => ({
              opacity: isActive ? 0.5 : 1,
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            ALL
          </NavLink>
          <NavLink
            to="/shop/category/men"
            className=" font-medium"
            style={({ isActive }) => ({
              opacity: isActive ? 0.5 : 1,
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            MEN
          </NavLink>
          <NavLink
            to="/shop/category/women"
            className=" font-medium"
            style={({ isActive }) => ({
              opacity: isActive ? 0.5 : 1,
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            WOMEN
          </NavLink>
          <NavLink
            to="/shop/category/kids"
            className=" font-medium"
            style={({ isActive }) => ({
              opacity: isActive ? 0.5 : 1,
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            KIDS
          </NavLink>
        </div>
      </header>
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
          <p>No items found in this category.</p>
        )}
      </div>
    </main>
  );
};
