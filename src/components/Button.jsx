export const Button = ({ text, className, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} w-fit px-[50px] py-[12px] lg:px-[2rem] lg:py-[1rem] text-[22px] lg:text-[20px] font-semibold -text-white -bg-blue hover:scale-105 transition-all duration-300 ease-in-out`}
    >
      {text}
    </button>
  );
};

export const ButtonBlue = ({ text, className, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} w-fit px-[50px] py-[12px] lg:px-[2rem] lg:py-[1.2rem] text-[22px] lg:text-[1.8rem] font-semibold -text-white -bg-blue hover:scale-105 transition-all duration-300 ease-in-out`}
    >
      {text}
    </button>
  );
};

export const ButtonWhite = ({ text, className, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} group w-fit px-[50px] py-[12px] text-[20px] lg:px-[2rem] lg:py-[1rem] font-semibold -text-black -bg-white hover:-bg-blue transition-all duration-500 ease-in-out hover:-text-white flex items-center gap-2`}
    >
      <span className="relative top-[1px] group-hover:-translate-x-2 transition-all duration-300 ease-in-out">
        {icon}
      </span>
      {text}
    </button>
  );
};
