import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ensure you have react-router-dom installed

const AccordionItem = ({ image, to, name, isOpen, onClick }) => {
  return (
    <div
      className={`relative h-[400px] md:h-[400px] transition-all duration-500 ${
        isOpen
          ? "rounded-[20px] w-full h-[400px] "
          : "w-[10%] md:w-[25%] rounded-[3px] h-[400px] "
      }`}
    >
      <div
        className="group relative w-full h-full overflow-hidden transition-opacity hover:opacity-100"
        onClick={onClick}
      >
        <img
          src={image}
          alt={name}
          className={`object-cover w-full h-full  transform transition duration-500 group-hover:scale-[1.05] rounded-[3px] ${isOpen ? "object-center" : "object-cover"}`}
        />
        <div className="group-hover:-bg-black/35 w-full h-full absolute group-hover:flex-col items-center justify-end top-0 group-hover:flex transition-all duration-300 ease-in-out ">
          <Link className={`${isOpen ? "block" : "hidden"}`} to={to}>
            <button className="-bg-blue -text-white text-[20px] font-medium group-hover:w-fit px-6 py-3 mb-[100px] hover:scale-[1.1] group-hover:block hidden transition-all duration-300">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Set first item expanded by default

  const handleItemClick = (index) => {
    // Set active index only if it's not already active
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  return (
    <div className="flex w-[90vw] lg:w-[70vw] overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          image={item.image}
          to={item.to}
          name={item.name}
          price={item.price}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
