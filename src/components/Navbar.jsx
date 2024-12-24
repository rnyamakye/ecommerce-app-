// src/Navbar.jsx
import React from "react";
import DropdownButton from "./Dropdown"; // Importing a DropdownButton component for additional options
import { HiShoppingBag } from "react-icons/hi2"; // Shopping bag icon
import { NavLink } from "react-router-dom"; // NavLink for navigation
import SearchBar from "./SearchBar"; // Importing the SearchBar component
import { useCart } from "./CartContext"; // Importing useCart

export const Navbar = () => {
  const { cartItems } = useCart(); // Accessing cart items

  return (
    <nav className="p-[1.5rem] h-[80px] md:h-[100px] w-full fixed top-0 z-50 -bg-white shadow-md">
      {/* Mobile view (hidden on large screens) */}
      <div className="flex items-center justify-between md:hidden lg:hidden">
        <div className="w-[80px] md:w-[150px]">
          <NavLink to={"/"}>
            <img src="/Screenshot 2024-12-04 135610.png" alt="Logo..." />
          </NavLink>
        </div>
        <div className="flex items-center gap-[30px] md:gap-[50px] text-[24px]">
          {/* Shopping Bag Icon with Item Count */}
          <NavLink
            to="/cart"
            className="relative flex justify-center items-center -translate-x-1"
          >
            <HiShoppingBag />
            {cartItems.length > 0 && (
              <span className="absolute top-[-5px] right-[-10px] -bg-blue -text-white text-sm rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </NavLink>
        </div>
        <DropdownButton />
      </div>

      {/* Desktop view (visible on large screens) */}
      <div className="hidden lg:flex md:flex items-center justify-evenly lg:text-[1.2rem] md:text-[1rem] font-medium">
        <div className="flex gap-[50px]">
          <NavLink to="/shop/category/all">SHOP</NavLink>
          <NavLink to="/shop/category/men">MEN</NavLink>
          <NavLink to="/shop/category/women">WOMEN</NavLink>
          <NavLink to="/shop/category/kids">KIDS</NavLink>
        </div>
        <NavLink to={"/"}>
          <img
            src="/Screenshot 2024-12-04 135610.png"
            alt="Logo..."
            className="w-[130px]"
          />
        </NavLink>
        <div className="flex gap-[30px] items-center lg:text-[1.4rem]">
          <NavLink to={"/about"}>ABOUT</NavLink>
          <NavLink to={"/contact"}>CONTACT</NavLink>
          {/* Search Bar */}
          <SearchBar />
          {/* Shopping Bag Icon with Item Count */}
          <NavLink to="/cart" className="relative flex items-center">
            <HiShoppingBag className="text-[1.8rem]" />
            {cartItems.length > 0 && (
              <span className="absolute top-[-10px] right-[-20px] -bg-blue w-6 h-6 flex items-center justify-center -text-white text-sm rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
