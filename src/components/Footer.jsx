import { Link } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ButtonWhite } from "./Button";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-[50px]">
      <div className="-bg-blue -text-white  font-medium flex flex-col items-center py-[50px] md:py-[100px] gap-[30px] px-5 text-center md:text-start md:flex-row justify-between lg:justify-around lg:gap-[200px] md:px-10 lg:px-0">
        <p className="text-[1.5rem] md:text-[1.6rem] md:w-[50%] lg:text-[2.5rem] lg:w-[30%]">
          Sign up for our newsletter & get 20% off{" "}
        </p>
        <ButtonWhite text={"SIGN UP FOR FREE"} />
      </div>
      <div className="text-[18px] flex flex-col md:flex-row justify-around gap-[30px] px-6 md:px-10">
        <div className="w-[50%] md:w-[20%] md:text-[16px]">
          <h3 className="text-[30px] md:text-[1.5rem] font-medium lg:text-[2rem]">
            WearHouse
          </h3>
          <p className="lg:text-[20px] ">Your trusted fashion companion</p>
        </div>
        <div className="flex flex-col gap-1 lg:text-[20px] md:text-[16px]">
          <h3 className="text-[24px] font-medium md:text-[1.5rem] lg:text-[2rem]">
            NAVIGATION
          </h3>
          <Link to={"/"}>Home</Link>
          <Link>Shop</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <div className="flex flex-col gap-1 lg:text-[20px] md:text-[16px]">
          <h3 className="text-[24px] font-medium md:text-[1.5rem] lg:text-[2rem]">
            CATEGORIES
          </h3>
          <Link>Men</Link>
          <Link>Women</Link>
          <Link>Kids</Link>
        </div>
        <div className="text-[35px] flex gap-[10px] md:text-[2rem] lg:text-[40px]">
          <Link>
            <IoLogoFacebook />
          </Link>
          <Link>
            <FaInstagram />
          </Link>
          <Link>
            <FaSquareXTwitter />
          </Link>
          <Link>
            <MdEmail />
          </Link>
        </div>
      </div>
      <div className="px-6 text-center">
        <span>All Rights Reserved By @Richtech Studios</span>
      </div>
    </footer>
  );
};
