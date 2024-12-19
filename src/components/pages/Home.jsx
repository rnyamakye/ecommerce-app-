import React, { useRef } from "react";
import { itemData } from "../../assets/Data";
import { Button, ButtonWhite } from "../Button";
import { ItemCard, GenderCard } from "../itemCard";
import { SlidingTextImage } from "../slidingTextImage";
import { TfiArrowTopRight } from "react-icons/tfi";
import { SliderItemCard } from "../itemCard";
import Carousel from "../Slider";
import { Footer } from "../Footer";
import SmoothScroll from "../SmoothScroll";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Accordion from "../accordion";

export const Home = () => {
  const bestSellers = itemData.slice(0, 6);
  const featured = itemData.slice(3, 6);
  const slides = itemData.slice(6, 17);

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
    <>
      <motion.main
        ref={contentRef}
        style={{ y }}
        className=" flex flex-col gap-[100px] md:gap-[150px] overflow-x-hidden w-[100vw] pb-[50px]"
      >
        <header className="flex flex-col gap-[50px]">
          <div className="bg-[url('/pexels-mart-production-7255322(2).jpg')] w-screen bg-cover bg-center h-[380px] md:h-[450px] flex items-end justify-center lg:justify-start pb-[10%] lg:pb-[10%] lg:h-[80vh]">
            <div className="flex flex-col gap-5 items-center lg:items-start lg:w-[50%] mx-[10vw]">
              <h1 className="text-[2.4rem] md:text-[40px] font-bold -text-white text-center leading-none lg:text-[6rem] lg:text-start">
                WEAR CLOTHES THAT MATTER
              </h1>
              <Button text={"Shop Now"} />
            </div>
          </div>
          <div className="flex justify-center flex-wrap gap-y-[40px] gap-x-[40px]">
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
        </header>
        <section className="flex flex-col items-center">
          <div className="flex flex-col gap-[30px] px-10 w-fit items-center">
            <div className="text-4xl font-medium lg:text-[4rem]">
              BEST SELLERS
            </div>
            <div className="flex flex-col items-center md:flex-row gap-[30px]">
              <Accordion items={bestSellers} />
            </div>
            <div className="flex flex-col items-center">
              <SlidingTextImage
                image={"/fGGdZvb7EzGR1bQmw3Qsv45WJs.jpg"}
                text={"See more best sellers "}
                icon={<TfiArrowTopRight />}
                className={"animate-slideRight"}
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center px-10">
          <div className="flex flex-col gap-[30px] md:gap-[100px] items-center">
            <div>
              <h2 className="text-4xl font-medium">FEATURED</h2>
            </div>
            <div className="flex flex-col gap-[30px] items-center md:flex-row lg:flex-row">
              {featured.map((item) => (
                <ItemCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  discount={item.discount}
                  price={item.price}
                />
              ))}
            </div>
            <div className="flex flex-col items-center">
              <SlidingTextImage
                image={"/9SazqeFTnXrYVlCuTm8R7IBsboU.jpg"}
                text={"See more best sellers"}
                icon={<TfiArrowTopRight />}
                className={"animate-slideLeft"}
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center gap-[100px]">
          <div className="flex flex-col items-center gap-[40px]">
            <div className="flex flex-col items-center gap-[20px]">
              <h2 className="text-4xl font-medium uppercase">Shop</h2>
              <Button text={"VISIT SHOP"} />
            </div>
            <div className="flex flex-col gap-[25px] lg:flex-row">
              <GenderCard
                image={"/5uW8h1Y8Jk6czLgq84bc2MyPs.jpg"}
                gender={"Men"}
              />
              <GenderCard
                image={"/cv9pTkCGUsKJxFT7RCuwQTwcs8.png"}
                gender={"Women"}
              />
            </div>
          </div>
          <div className="px-10 flex flex-col items-center gap-[30px]">
            <h2 className="text-[30px] font-medium">YOU MAY ALSO LIKE</h2>
            <div>
              <Carousel autoSlide={true}>
                {[
                  ...slides.map((item) => (
                    <SliderItemCard
                      key={item.id}
                      image={item.image}
                      price={item.price}
                      name={item.name}
                    />
                  )),
                ]}
              </Carousel>
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
};
