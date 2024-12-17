import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaChevronRight } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { AboutCard } from "../itemCard";

const About = () => {
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

  return (
    <motion.main
      ref={contentRef}
      style={{ y }}
      className=" flex flex-col gap-[100px] md:gap-[150px] overflow-x-hidden w-[100vw] items-center py-[100px]"
    >
      <header className="flex flex-col gap-[100px] lg:mx-10">
        <div className="flex flex-col items-center gap-[20px]">
          <h1 className="text-[2.5rem] md:text-[3rem] font-bold">ABOUT US</h1>
          <div className="flex items-center md:text-[21px] gap-5">
            <span>Home</span> <FaChevronRight className="text-[0.8rem]" />
            <span className="-text-blue">About Us</span>
          </div>
        </div>
        <div className="">
          <img
            src="/pexels-andersbk-447570.jpg"
            className="object-cover md:h-[600px] w-[100vw]"
          />
        </div>
      </header>
      <section className="flex flex-col items-center gap-[50px] w-[75vw]">
        <div className="flex flex-col items-center justify-center gap-[30px] md:gap-x-0 md:w-[75vw] md:grid md:grid-cols-2 md:grid-rows-2 text-center md:text-start lg:flex lg:flex-row lg:w-[90vw] lg:gap-[30px] lg:px-[100px]">
          <div className=" md:w-[80%] flex flex-col lg:gap-[10px]">
            <h2 className="text-[1.5rem] md:text-[1.8rem] font-medium">
              SHOP ONLINE
            </h2>
            <p className="text-[18px] md:text-[21px] opacity-60 md:leading-9">
              Explore the vast collection of premium clothing from the the
              comfort of your own home.
            </p>
          </div>
          <div className="md:w-[80%] flex flex-col lg:gap-[10px]">
            <h2 className="text-[1.5rem] md:text-[1.8rem] font-medium">
              FREE SHIPPING
            </h2>
            <p className="text-[18px] md:text-[21px] opacity-60 md:leading-9">
              Enjoy the convenience of free shipping on all orders, nationwide.
            </p>
          </div>
          <div className="md:w-[80%] flex flex-col lg:gap-[10px]">
            <h2 className="text-[1.5rem] md:text-[1.8rem] font-medium">
              RETURN POLICY
            </h2>
            <p className="text-[18px] md:text-[21px] opacity-60 md:leading-9">
              Your satisfaction is our priority. Return any product you're not
              satisfied with.
            </p>
          </div>
          <div className="md:w-[80%] flex flex-col lg:gap-[10px]">
            <h2 className="text-[1.5rem] md:text-[1.8rem] font-medium">
              PAYMENT METHOD
            </h2>
            <p className="text-[18px] md:text-[21px] opacity-60 md:leading-9">
              Choose from a variety of secure payment methods to complete your
              transaction with ease.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center mx-5 gap-[150px] md:mx-10 lg:mx-[100px] lg:w-[80vw]">
        <div>
          <p className="text-center text-[18px] md:text-[21px] font-semibold">
            At the heart of Serrena lies a distinctive philosophy that
            transcends trends and embraces the essence of enduring style. Our
            collections are a harmonious blend of sophistication, versatility,
            and modernity, carefully curated to enhance your personal
            expression. We believe that fashion should empower, inspire, and
            reflect the unique narrative of every individual. Serrena is not
            just about clothing; it's about embracing a lifestyle that embraces
            the artistry of fashion and the poetry of self-expression.
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-y-[40px] gap-x-[40px] lg:gap-[50px]">
          <img
            src="/jOc8ocv3NkFD0PkOQbamqxXhuE.svg"
            className="w-[100px] h-[25px] md:w-[90px] md:h-[25px] lg:w-[160px] lg:h-[40px] hover:scale-[1.02] transition-all duration-300 ease"
          />
          <img
            src="/u8WevV7mCKQBN8jeLHALsSQQs34.svg"
            className="w-[100px] h-[25px] md:w-[90px] md:h-[25px] lg:w-[160px] lg:h-[40px] hover:scale-[1.02] transition-all duration-300 ease"
          />
          <img
            src="/StsYHkCZHpy4eY8jsBCQEWc.svg"
            className="w-[100px] h-[25px] md:w-[90px] md:h-[25px] lg:w-[160px] lg:h-[40px] hover:scale-[1.02] transition-all duration-300 ease"
          />
          <img
            src="/z336n0D2YdMY9XgDiBAU7XSW6s.svg"
            className="w-[100px] h-[25px] md:w-[90px] md:h-[25px] lg:w-[160px] lg:h-[40px] hover:scale-[1.02] transition-all duration-300 ease"
          />
          <img
            src="/zBWNdmAieoTmcQCkIkTZ9rfnqo.svg"
            className="w-[100px] h-[25px] md:w-[90px] md:h-[25px] lg:w-[160px] lg:h-[40px] hover:scale-[1.02] transition-all duration-300 ease"
          />
          <img
            src="/WdroEkOLMZk4iQzRgxNWMhLTlY.svg"
            className="w-[100px] h-[25px] md:w-[90px] md:h-[25px] lg:w-[160px] lg:h-[40px] hover:scale-[1.02] transition-all duration-300 ease"
          />
        </div>
        <div className="w-full flex flex-col gap-[20px] items-center md:gap-[50px] ">
          <h3 className="text-[1.6rem] md:text-[1.8rem] lg:text-[3rem] font-semibold">FOLLOW @WEARHOUSE</h3>
          <div className="flex flex-col gap-[30px] md:grid md:grid-rows-2 md:grid-cols-2 lg:flex lg:flex-row lg:w-[90vw] lg:mx-[100px] lg:gap-[15px]">
            <AboutCard
              image={"/mw4Ie2Fs2QvK2MVyohtc6HRGw.jpg"}
              icon={<FaInstagram />}
            />
            <AboutCard
              image={"/sv4saN07BOwi4IdhAmljgHMlo.jpg"}
              icon={<FaInstagram />}
            />
            <AboutCard
              image={"/loMMGmMx99iT3MTTxx1sRotu260.jpg"}
              icon={<FaInstagram />}
            />
            <AboutCard
              image={"/M2WAUBTf1oy45GOhezNlrMFGrk.jpg"}
              icon={<FaInstagram />}
            />
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default About;
