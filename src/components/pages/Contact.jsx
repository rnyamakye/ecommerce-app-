import {  useEffect } from "react";
import { FaChevronRight } from "react-icons/fa6";
import ContactForm from "../Form";
import FAQ from "../FAQSection";

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className=" flex flex-col gap-[100px] md:gap-[150px] overflow-x-hidden w-[100vw] items-center py-[150px]">
      <header className="flex flex-col gap-[50px] lg:mx-10 items-center">
        <div className="flex flex-col items-center gap-[20px]">
          <h1 className="text-[2.5rem] md:text-[3rem] font-bold">CONTACT US</h1>
          <div className="flex items-center md:text-[21px] gap-5">
            <span>Home</span> <FaChevronRight className="text-[0.8rem]" />
            <span className="-text-blue">Contact Us</span>
          </div>
        </div>
        <div className="flex flex-col items-center text-center w-[60%] gap-[25px]">
          <div className="text-[1.2rem] font-medium">
            <h2>Need any help? w'ere here for you.</h2>
          </div>
          <div className="">
            <h3 className="text-[1.4rem] font-medium">CALL US</h3>
            <span className="text-[18px]">+233257152860</span>
          </div>
          <div>
            <h3 className="text-[1.4rem] font-medium">MAIL</h3>
            <span className="text-[18px]">rnyamekye32@gmail.com</span>
          </div>
        </div>
      </header>
      <section className="w-[100vw] flex flex-col items-center gap-[50px] md:flex-row md:items-start md:w-[90vw]">
        <ContactForm />
        <FAQ />
      </section>
    </main>
  );
};
