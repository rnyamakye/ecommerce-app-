
import DropdownButton from "./Dropdown"; // Importing a DropdownButton component for additional options
import { HiShoppingBag } from "react-icons/hi2"; // Shopping bag icon
import { NavLink } from "react-router-dom"; // NavLink for navigation
import SearchBar from "./SearchBar"; // Importing the SearchBar component
import { useCart } from "./CartContext"; // Importing useCart

export const Navbar = () => {
  const { cartItems } = useCart(); // Accessing cart items

  return (
    <nav className="p-[1.5rem] h-[80px] md:h-[60px] w-full fixed top-0 z-50 -bg-white shadow-customShadow">
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
              <span className="absolute top-[-5px] right-[-10px] -bg-blue w-5 h-5 flex justify-center -text-white text-sm rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </NavLink>
        </div>
        <DropdownButton />
      </div>

      {/* Desktop view (visible on large screens) */}
      <div className="hidden lg:flex md:flex -translate-y-2 justify-evenly lg:text-[1.2rem] md:text-[1.4rem] font-medium">
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
            className="w-[130px] h-[30px]"
          />
        </NavLink>
        <div className="flex gap-[30px]">
          <NavLink to={"/about"}>ABOUT</NavLink>
          <NavLink to={"/contact"}>CONTACT</NavLink>
          {/* Search Bar */}
       <div className="-translate-y-1">   <SearchBar/></div>
          {/* Shopping Bag Icon with Item Count */}
          <NavLink to="/cart" className="relative flex ">
            <HiShoppingBag className="text-[1.8rem]" />
            {cartItems.length > 0 && (
              <span className="absolute top-[-8px] right-[-12px] -bg-blue w-6 h-6 flex items-center justify-center -text-white text-sm rounded-full px-1">
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
