// src/Shop.jsx
import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaChevronRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom"; // Change this to NavLink for active styles
import { itemData } from "../../assets/Data"; // Import your data
import { ShopItemCard } from "../itemCard";

export const Shop = () => {
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Create a smooth scroll effect
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 1.5,
    stiffness: 0,
    damping: 20,
  });

  // Transform the scroll progress to a y value for motion
  const y = useTransform(smoothProgress, (value) => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight; // Get the height of the content
      return value * -(contentHeight - window.innerHeight); // Calculate the y position
    }
    return 0; // Default return if contentRef is not available
  });

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter items based on selected category
  const filteredItems =
    selectedCategory === "all"
      ? itemData
      : itemData.filter((item) => item.category === selectedCategory);

  return (
    <motion.main
      ref={contentRef}
      style={{ y }}
      className=" flex flex-col gap-[100px] md:gap-[150px] overflow-x-hidden w-[100vw] items-center py-[100px]"
    >
      <header className="flex flex-col gap-[50px] lg:mx-10 items-center">
        <div className="flex flex-col items-center gap-[20px]">
          <h1 className="text-[2.5rem] md:text-[3rem] font-bold">SHOP</h1>
          <div className="flex items-center md:text-[21px] gap-5">
            <span>Home</span> <FaChevronRight className="text-[0.8rem]" />
            <span className="-text-blue"></span>
          </div>
        </div>
        <div className="flex gap-[10px]">
          <NavLink
            to="/shop"
            className="text-[1.2rem] font-medium"
            style={({ isActive }) => ({
              opacity: isActive ? 0.5 : 1,
            })}
            onClick={() => setSelectedCategory("all")}
          >
            ALL
          </NavLink>
          <NavLink
            to="/shop"
            className="text-[1.2rem] font-medium"
            style={({ isActive }) => ({
              opacity: isActive ? 0.5 : 1,
            })}
            onClick={() => setSelectedCategory("men")}
          >
            MEN
          </NavLink>
          <NavLink
            to="/shop"
            className="text-[1.2rem] font-medium"
            style={({ isActive }) => ({
              opacity: isActive ? 0.5 : 1,
            })}
            onClick={() => setSelectedCategory("women")}
          >
            WOMEN
          </NavLink>
          <NavLink
            to="/shop"
            className="text-[1.2rem] font-medium"
            style={({ isActive }) => ({
              opacity: isActive ? 0.5 : 1,
            })}
            onClick={() => setSelectedCategory("kids")}
          >
            KIDS
          </NavLink>
        </div>
      </header>
      <section ref={contentRef} className="md:mx-10">
        <div className="flex flex-col gap-[30px] items-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-[20px]">
          {filteredItems.map((item) => (
            <ShopItemCard
              key={item.id}
              image={item.image}
              name={item.name}
              discount={item.discount}
              price={item.price}
              category={item.category}
            />
          ))}
        </div>
      </section>
    </motion.main>
  );
};
