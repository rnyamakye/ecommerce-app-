// src/FAQ.jsx
import React, { useState } from "react";
import { GiClothes } from "react-icons/gi";

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "How often do you introduce new collections?",
      answer:
        "We regularly refresh our collections to keep up with the latest trends and deliver a diverse range of styles. New arrivals are introduced seasonally, ensuring you have access to the latest fashion statements.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we provide international shipping to bring Serrena's exclusive styles to customers around the world. Shipping fees and delivery times may vary based on the destination.",
    },
    {
      question: "Are gift cards available?",
      answer:
        "Absolutely! Serrena offers gift cards of various denominations, making them a perfect choice for those who want to share the gift of premium fashion with their loved ones.",
    },
  ];

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? index : index);
  };

  return (
    <div className="mt-8 w-[90%] flex flex-col gap-[30px]">
      <h2 className="text-[1.8rem] font-medium text-center">
        FREQUENTLY ASKED
      </h2>
      <div className="flex flex-col gap-[20px]">
        {faqs.map((faq, index) => (
          <div
            onClick={() => toggleFAQ(index)}
            key={index}
            className="border-b-[1px] -border-gray py-5"
          >
            <div
              className={`flex gap-[20px] justify-between cursor-pointer transition-all duration-300 ease-in-out px-3`}
            >
              <span className="text-[1rem] font-medium">{faq.question}</span>
              <span>
                <GiClothes className="text-[1.4rem]" />
              </span>
            </div>
            {expandedIndex === index && (
              <div
                className={`flex flex-col justify-center  transition-all duration-300 ease-in-out px-3 text-[14px] py-5 w-[90%]`}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
