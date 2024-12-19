// src/components/DropdownButton.js
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left lg:hidden">
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center flex-col gap-2 justify-center w-12 h-12 rounded-full -bg-white text-white focus:outline-none"
        >
          <span
            className={`block w-6 h-0.5 -bg-black transition-transform duration-300 ${
              isOpen ? "transform rotate-45 translate-y-[5px]" : ""
            }`}
          ></span>

          <span
            className={`block w-6 h-0.5 -bg-black transition-transform duration-300 ${
              isOpen ? "transform -rotate-45 -translate-y-[5px]" : ""
            }`}
          ></span>
        </button>
        <div
          onClick={closeDropdown}
          className={`absolute top-0 w-12 h-12 ${isOpen ? "block" : "hidden"}`}
        ></div>
      </div>

      <div
        ref={menuRef}
        className={`dropdown group ${
          isOpen ? "active" : "inactive"
        } absolute -right-6 w-[100vw] flex justify-start p-5  bg-white z-10 transition-all duration-300 ease-in-out -bg-white shadow-customShadow`}
      >
        <div
          className={`menu-list py-1 flex w-full flex-col gap-[5px] text-[20px] font-medium ${
            isOpen ? "active" : "inactive"
          }`}
        >
          <Link
            to={"/shop"}
            className="block px-4 py-2 text-sm text-gray-700 hover:opacity-50 text-[24px]"
            onClick={closeDropdown}
          >
            SHOP
          </Link>
          <Link
            to={""}
            className="block px-4 py-2 text-sm text-gray-700 hover:opacity-50 text-[24px]"
            onClick={closeDropdown}
          >
            MEN
          </Link>
          <Link
            to={""}
            className="block px-4 py-2 text-sm text-gray-700 hover:opacity-50 text-[24px]"
            onClick={closeDropdown}
          >
            KIDS
          </Link>
          <Link
            to={"/about"}
            className="block px-4 py-2 text-sm text-gray-700 hover:opacity-50 text-[24px]"
            onClick={closeDropdown}
          >
            ABOUT
          </Link>
          <Link
            to={"/contact"}
            className="block px-4 py-2 text-sm text-gray-700 hover:opacity-50 text-[24px]"
            onClick={closeDropdown}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropdownButton;
