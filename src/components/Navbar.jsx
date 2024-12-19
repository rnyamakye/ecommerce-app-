// src/Navbar.jsx
import DropdownButton from "./Dropdown"; // Importing a DropdownButton component for additional options
import { HiShoppingBag } from "react-icons/hi2"; // Shopping bag icon
import { NavLink } from "react-router-dom"; // NavLink for navigation
import SearchBar from "./SearchBar";
import { useCart } from "./CartContext";

export const Navbar = () => {
  const { cartItems } = useCart();
  return (
    <>
      <nav className="p-[1.5rem] h-[100px] w-full fixed top-0 z-50 -bg-white flex justify-center">
        {/* Mobile view (hidden on large screens) */}
        <div className="flex items-center justify-between lg:hidden">
          <div className="w-[150px]">
            <NavLink to={"/"}>
              <img src="/Screenshot 2024-12-04 135610.png" alt="Logo..." />
            </NavLink>
          </div>
          <DropdownButton />
        </div>

        {/* Desktop view (visible on large screens) */}
        <div className="hidden lg:flex items-center justify-evenly lg:text-[1.2rem] font-medium gap-[50px] w-[90%]">
          <div className="flex gap-[50px] font-medium md:text-[1.4rem]">
            <NavLink to="/shop/category/all" className="">
              SHOP
            </NavLink>
            <NavLink to="/shop/category/men" className="">
              MEN
            </NavLink>
            <NavLink to="/shop/category/women" className="">
              WOMEN
            </NavLink>
            <NavLink to="/shop/category/kids" className="">
              KIDS
            </NavLink>
          </div>
          <NavLink to={"/"}>
            <img
              src="/Screenshot 2024-12-04 135610.png"
              alt="Logo..."
              className="w-[150px]"
            />
          </NavLink>
          <div className="flex gap-[30px] items-center md:text-[1.4rem]">
            <NavLink to={"/about"}>ABOUT</NavLink>
            <NavLink to={"/contact"}>CONTACT</NavLink>
            <SearchBar />
            <NavLink to="/cart" className="relative flex items-center">
              <HiShoppingBag className="text-xl" />
              {cartItems.length > 0 && (
                <span className="absolute top-[-5px] right-[-10px] bg-red-500 text-white text-xs rounded-full px-1">
                  {cartItems.length}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
