import React from "react";
// Import the CSS file for animations

export const SlidingTextImage = ({ text, image, icon, className }) => {
  return (
    <div className="relative w-[90vw] h-[450px] md:w-[95vw] md:h-[70vh] lg:w-[70vw] lg:h-[80vh] overflow-hidden">
      <img
        src={image}
        alt="Background"
        className="object-cover object-center md:object-center lg:object-center w-full h-full rounded-[3px]"
      />
      <div className="w-full h-full bg-black/40 absolute top-0"></div>
      <div className={`whitespace-nowrap absolute bottom-5 animate-slide`}>
        <div className={`flex text-white uppercase ${className}`}>
          {/* Duplicate the text and icon for sliding effect */}
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="text-[20px] lg:text-[3rem] md:text-[2.5rem] font-medium pr-20 flex items-end gap-3 -text-white"
            >
              <span>{text}</span> <span className="pb-[2px] lg:pb-[5px]">{icon}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
