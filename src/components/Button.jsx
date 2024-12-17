export const Button = ({ text, className, icon }) => {
  return (
    <button
      className={`${className} w-fit px-[50px] py-[12px] lg:px-[5rem] lg:py-[1.4rem] text-[22px] lg:text-[1.8rem] font-semibold -text-white -bg-blue hover:scale-105 transition-all duration-300 ease-in-out`}
    >
      {text}
    </button>
  );
};

export const ButtonWhite = ({ text, className, icon }) => {
  return (
    <button
      className={`${className} w-fit px-[50px] py-[12px] text-[20px] lg:px-[5rem] lg:py-[1.4rem] font-semibold -text-black -bg-white hover:-bg-blue transition-all duration-500 ease-in-out hover:-text-white`}
    >
      {text}
    </button>
  );
};
