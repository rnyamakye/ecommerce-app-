import DropdownButton from "./Dropdown";
import { HiShoppingBag } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="p-[1.5rem] h-[80px] w-full fixed top-0 z-50 -bg-white">
        <div className="flex items-center justify-between lg:hidden">
          <div className="w-[150px]">
            <Link to={"/"}>
              {" "}
              <img src="/Screenshot 2024-12-04 135610.png" alt="Logo..." />
            </Link>
          </div>
          <DropdownButton />
        </div>
        <div className="hidden lg:flex items-center justify-evenly lg:text-[1.2rem] font-medium">
          <div className="flex gap-[50px]">
            <Link to={"/shop"}>SHOP</Link>
            <Link to={""}>MEN</Link>
            <Link to={""}>WOMEN</Link>
            <Link to={""}>KIDS</Link>
          </div>
          <div>
            <img
              src="/Screenshot 2024-12-04 135610.png"
              alt="Logo..."
              className="w-[150px]"
            />
          </div>
          <div className="flex gap-[30px] items-center lg:text-[1.2rem]">
            <Link to={"/about"}>ABOUT</Link>
            <Link to={"/contact"}>CONTACT</Link>
            <FaSearch />
            <HiShoppingBag />
          </div>
        </div>
      </nav>
    </>
  );
};
