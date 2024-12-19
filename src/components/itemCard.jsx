import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

export const ItemCard = ({ name, image, price, discount, to }) => {
  return (
    <Link className="flex flex-col gap-[5px] w-[80vw] md:w-fit" to={to}>
      <div className="group relative w-[80vw] h-[400px] md:w-[30vw] md:h-[600px] cursor-pointer overflow-hidden transition-opacity hover:opacity-100 lg:w-[400px] lg:h-[500px]">
        <img
          src={image}
          className="object-cover object-top w-full h-[100%] md:h-full lg:h-[100%] transform transition duration-500 group-hover:scale-[1.05] rounded-[3px]"
        />
        <span className="-bg-blue -text-white px-3 py-1 md:text-[18px] absolute top-2 right-2">
          {discount}
        </span>
        <div className="group-hover:-bg-black/35 w-full h-full absolute group-hover:flex-col items-center justify-end top-0 group-hover:flex transition-all  duration-300 ease-in-out ">
          <button
            to={to}
            className="-bg-white text-[20px] font-medium group-hover:w-fit px-6 py-3 mb-[100px] hover:scale-[1.1] group-hover:block hidden  transition-all duration-300"
          >
            Buy Now
          </button>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <span className="text-[18px] font-semibold uppercase hover:underline transition-all duration-300 ">
          {name}
        </span>
        <span className="text-[16px] font-semibold">{price}</span>
      </div>
    </Link>
  );
};
export const CartItemCard = ({ name, image, price, discount, to }) => {
  return (
    <Link className="flex flex-col gap-[5px] w-[80vw] md:w-fit" to={to}>
      <div className="group relative w-[80vw] h-[400px] md:w-[30vw] md:h-[600px] cursor-pointer overflow-hidden transition-opacity hover:opacity-100 lg:w-[400px] lg:h-[500px]">
        <img
          src={image}
          className="object-cover object-top w-full h-[100%] md:h-full lg:h-[100%] transform transition duration-500 group-hover:scale-[1.05] rounded-[3px]"
        />
        <span className="-bg-blue -text-white px-3 py-1 md:text-[18px] absolute top-2 right-2">
          {discount}
        </span>
        <div className="group-hover:-bg-black/35 w-full h-full absolute group-hover:flex-col items-center justify-end top-0 group-hover:flex transition-all  duration-300 ease-in-out ">
          <button
            to={to}
            className="-bg-white text-[20px] font-medium group-hover:w-fit px-6 py-3 mb-[100px] hover:scale-[1.1] group-hover:block hidden  transition-all duration-300"
          >
            Remove
          </button>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <span className="text-[18px] font-semibold uppercase hover:underline transition-all duration-300 ">
          {name}
        </span>
        <span className="text-[16px] font-semibold">{price}</span>
      </div>
    </Link>
  );
};

export const ShopItemCard = ({ name, image, price, to }) => {
  const { addToCart } = useCart(); // Accessing addToCart function

  const handleAddToCart = () => {
    const item = { id: name, image, name, price }; // Create an item object
    addToCart(item); // Add item to cart
  };
  return (
    <Link
      className="flex flex-col gap-[5px] w-[80vw] md:w-[100%] md:h-[600px]"
      to={to}
    >
      <div className="group relative w-[80vw] h-[400px] md:w-[100%] md:h-[500px] cursor-pointer overflow-hidden transition-opacity hover:opacity-100 lg:w-[400px] lg:h-[500px]">
        <img
          src={image}
          className="object-cover object-top w-full h-[100%] md:h-full lg:h-[100%] transform transition duration-500 group-hover:scale-[1.05] rounded-[3px]"
        />

        <div className="group-hover:-bg-black/35 w-full h-full absolute group-hover:flex-col items-center justify-end top-0 group-hover:flex transition-all  duration-300 ease-in-out ">
          <button
            to={to}
            className="-bg-white text-[20px] font-medium group-hover:w-fit px-6 py-3 mb-[100px] hover:scale-[1.1] group-hover:block hidden  transition-all duration-300"
            onClick={handleAddToCart}
          >
            Buy Now
          </button>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <span className="text-[18px] font-semibold uppercase hover:underline transition-all duration-300 ">
          {name}
        </span>
        <span className="text-[16px] font-semibold">{price}</span>
      </div>
    </Link>
  );
};

export const GenderCard = ({ image, to, gender }) => {
  return (
    <Link to={to}>
      <div className="group relative w-[95vw] h-[400px] lg:w-[35vw] lg:h-[600px] cursor-pointer overflow-hidden transition-opacity hover:opacity-100 md:h-[600px]">
        <img
          src={image}
          className="object-cover w-full h-[100%] md:h-full transform transition duration-500 group-hover:scale-[1.07] rounded-[3px]"
        />

        <div className="group-hover:-bg-black/15 w-full h-full absolute group-hover:flex-col items-center justify-end top-0 group-hover:flex transition-all  duration-300 ease-in-out ">
          {" "}
          <div className="-text-white text-[24px] md:text-[3rem] left-5 absolute bottom-2 group-hover:-translate-y-2 transition-all duration-300 ease-in-out">
            {gender}
          </div>
        </div>
      </div>
    </Link>
  );
};

export const SliderItemCard = ({ image, to, name, price }) => {
  return (
    <div className="flex flex-col gap-[5px] h-[500px] w-[80vw] md:w-[100%] md:h-[600px] lg:w-[600px] lg:h-[750px]">
      <div className="group relative w-[80vw] md:w-[50vw] h-[400px] lg:w-[550px] lg:h-[650px] md:h-[600px] overflow-hidden transition-opacity hover:opacity-100">
        <img
          src={image}
          className="object-cover  w-[100%] h-[600px] lg:h-[650px] lg:w-[550px] transform transition duration-500 group-hover:scale-[1.05] rounded-[3px]"
        />
        <div className="group-hover:-bg-black/35 w-full h-full absolute group-hover:flex-col items-center justify-end top-0 group-hover:flex transition-all  duration-300 ease-in-out ">
          <Link to={to}>
            <button className="-bg-blue -text-white text-[20px] font-medium group-hover:w-fit px-6 py-3 mb-[100px] hover:scale-[1.1] group-hover:block hidden  transition-all duration-300">
              Buy Now
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-start -text-black">
        <span className="text-[20px] font-semibold uppercase hover:underline group-hover:underline transition-all duration-300">
          {name}
        </span>
        <span className="text-[18px] font-semibold">{price}</span>
      </div>
    </div>
  );
};
export const AboutCard = ({ image, icon }) => {
  return (
    <div className="group relative w-[90vw] md:w-[400px] h-[300px] lg:w-[450px] lg:h-[400px] md:h-[350px] overflow-hidden transition-opacity hover:opacity-100">
      <img
        src={image}
        className="object-cover w-[100%] h-[300px] md:h-[350px] lg:h-[400px] lg:w-[450px] transform transition duration-500 group-hover:scale-[1.05] rounded-[3px]"
      />
      <div className="group-hover:-bg-black/35 w-full h-full absolute group-hover:flex-col items-center justify-end top-0 group-hover:flex transition-all  duration-300 ease-in-out ">
        <span className="text-[2.5rem] -text-white absolute bottom-4 right-4 group-hover:bottom-5 group-hover:right-5 transition-all duration-500 ease-in-out ">
          {icon}
        </span>
      </div>
    </div>
  );
};
